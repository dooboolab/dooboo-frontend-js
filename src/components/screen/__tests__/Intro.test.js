import React from 'react';
import renderer from 'react-test-renderer';

import Intro from '../Intro';
import Button from '../../shared/Button';
import Store from '../../../stores/appStore';

const props = {
  store: new Store(),
  navigation: {
    navigate: jest.fn(),
  },
  history: {
    push: jest.fn(),
  },
};

// test for the container page in dom
describe('Intro page DOM rendering test', () => {
  let tree;
  const component = <Intro { ...props } />;

  it('component and snapshot matches', () => {
    tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// describe('Interaction', () => {
//   let rendered;
//   let instance;
//   const component = <Intro { ...props } />;

//   beforeAll(() => {
//     rendered = renderer.create(component);
//     instance = rendered.root;

//     Object.defineProperty(window.alert, 'window.alert', {
//       configurable: true,
//     });
//     window.alert = jest.fn();
//   });

//   it('Simulate onClick', () => {
//     // const spy = jest.spyOn(rendered.getInstance(), 'onClick');
//     const button = instance.findByType(Button);
//     button.props.onClick();
//     expect(window.alert).toBeCalled();
//   });
// });

describe('Interaction', () => {
  let rendered: TestRenderer.ReactTestRenderer;
  let root: TestRenderer.ReactTestRenderer.root;
  const component = <Intro { ...props } />;

  beforeAll(() => {
    rendered = renderer.create(component);
    root = rendered.root;
  });

  it('Simulate onPress', () => {
    jest.useFakeTimers();
    const spy = jest.spyOn(rendered.getInstance().wrappedInstance, 'onLogin');
    const buttons = root.findAllByType(Button);
    root.instance.wrappedInstance.onLogin(); // == buttons[0].props.onPress();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(root.instance.wrappedInstance.state.isLoggingIn).toEqual(true);

    jest.runAllTimers();
    expect(root.instance.wrappedInstance.state.isLoggingIn).toEqual(false);
    expect(props.store.user.displayName).toEqual('dooboolab');
    expect(props.store.user.age).toEqual(30);
    expect(props.store.user.job).toEqual('developer');
    expect(spy).toBeCalled();
    buttons[1].props.onPress();
    expect(props.history.push).toBeCalledWith({
      pathname: '/404',
      state: {},
    });

    buttons[0].props.onPress();
  });
});


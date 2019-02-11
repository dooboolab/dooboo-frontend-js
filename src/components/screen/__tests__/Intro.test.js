import React from 'react';
import renderer from 'react-test-renderer';

import { AppProvider } from '../../../providers';
import Intro from '../Intro';
import Button from '../../shared/Button';

let props = {
  navigation: {
    navigate: jest.fn(),
  },
  history: {
    push: jest.fn(),
  },
  store: {
    state: {
      user: {
        displayName: '',
        age: 0,
        job: '',
      },
    },
    actions: {
      resetUser: jest.fn(),
      setUser: jest.fn(),
      getString: jest.fn(),
    },
  },
};

const component = (
  // <AppProvider>
  <Intro {...props}/>
  // </AppProvider>
);

// test for the container page in dom
describe('[Intro] screen rendering test', () => {
  let json;

  it('should render outer component and snapshot matches', () => {
    json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('[Intro] Interaction', () => {
  let rendered: TestRenderer.ReactTestRenderer;
  let root: TestRenderer.ReactTestRenderer.root;

  beforeAll(() => {
    rendered = renderer.create(component);
    root = rendered.root;
  });

  it('should simulate onClick', () => {
    jest.useFakeTimers();
    let instance = rendered.getInstance();
    let children = instance.props.children;

    const spy = jest.spyOn(root.instance, 'onLogin');
    const buttons = root.findAllByType(Button);
    instance.onLogin(props.store); // buttons[0].props.onClick();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(instance.state.isLoggingIn).toEqual(true);

    jest.runAllTimers();
    expect(root.instance.state.isLoggingIn).toEqual(false);
    expect(instance.props.store.actions.setUser).toHaveBeenCalled();
    expect(spy).toBeCalled();
    buttons[1].props.onClick();
    expect(props.history.push).toBeCalledWith({
      pathname: '/404',
      state: {},
    });

    buttons[0].props.onClick();
  });
});


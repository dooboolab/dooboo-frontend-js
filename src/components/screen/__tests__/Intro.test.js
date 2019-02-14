import React from 'react';
import renderer from 'react-test-renderer';

import { AppProvider } from '../../../providers';
import Intro from '../Intro';
import Button from '../../shared/Button';
import { AppContext } from './testHelpers';

const props = {
  navigation: {
    navigate: jest.fn(),
  },
  history: {
    push: jest.fn(),
  },
};

const component = (
  <AppProvider>
    <Intro {...props} />
  </AppProvider>
);

const context = AppContext;

// test for the container page in dom
describe('[Intro] screen rendering test', () => {
  let json;

  it('should render outer component and snapshot matches', () => {
    json = renderer.create(component, { context }).toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('[Intro] Interaction', () => {
  let rendered: TestRenderer.ReactTestRenderer;
  let root: TestRenderer.ReactTestRenderer.root;
  let instance;

  beforeEach(() => {
    rendered = renderer.create(component, { context });
    root = rendered.root;
  });

  it('should simulate [onLogin] click', () => {
    jest.useFakeTimers();

    const buttons = root.findAllByType(Button);
    buttons[0].props.onClick();
    // expect(context.dispatch).toHaveBeenCalledWith({ type: 'reset-user' });
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(buttons[0].props.isLoading).toEqual(true);
    jest.runAllTimers();
    // expect(context.dispatch).toHaveBeenCalledWith({ type: 'set-user' }, expect.any(Object));
    expect(clearTimeout).toHaveBeenCalledTimes(1);
    expect(buttons[0].props.isLoading).toEqual(false);
  });

  it('should simulate [navigate] click', () => {
    const buttons = root.findAllByType(Button);
    buttons[1].props.onClick();
    expect(props.history.push).toBeCalledWith({
      pathname: '/404',
      state: {},
    });
  });
});


import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

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

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

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

  it('should simulate [onLogin] click', () => {
    act(() => {
      ReactDOM.render(component, container);
    });
    jest.useFakeTimers();

    const button = container.querySelector('button');
    act(() => {
      button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
      // expect(context.dispatch).toHaveBeenCalledWith({ type: 'reset-user' });
      // expect(context.dispatch).toHaveBeenCalledWith({ type: 'set-user' }, expect.any(Object));
    });
    expect(setTimeout).toHaveBeenCalledTimes(1);
    // expect(props.isLoading).toEqual(true); // TODO: test with useState
    act(() => {
      jest.runAllTimers();
    });
    expect(clearTimeout).toHaveBeenCalledTimes(1);
    // expect(buttons[0].props.isLoading).toEqual(false); // TODO: test with useState
  });

  it('should simulate [navigate] click', () => {
    rendered = renderer.create(component, { context });
    root = rendered.root;

    const buttons = root.findAllByType(Button);
    buttons[1].props.onClick();
    expect(props.history.push).toBeCalledWith({
      pathname: '/404',
      state: {},
    });
  });
});


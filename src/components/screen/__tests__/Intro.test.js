import React from 'react';
import renderer from 'react-test-renderer';
import {render, act, fireEvent, cleanup, waitForElement, getByTestId} from '@testing-library/react';

import { AppProvider } from '../../../providers';
import Intro from '../Intro';
import Button from '../../shared/Button';
import { getString } from '../../../../STRINGS';

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
    json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('[Intro] Interaction', () => {
  let rendered: TestRenderer.ReactTestRenderer;
  let root: TestRenderer.ReactTestRenderer.root;
  let instance;
  let renderResult: RenderResult;

  afterEach(cleanup);

  it('should simulate [onLogin] click with testing library', () => {
    jest.useFakeTimers();
    renderResult = render(component);
    fireEvent.click(renderResult.getByText(getString('LOGIN')));
    expect(setTimeout).toHaveBeenCalledTimes(1);
    // expect(context.dispatch).toHaveBeenCalledWith({ type: 'reset-user' });
    // expect(context.dispatch).toHaveBeenCalledWith({ type: 'set-user' }, expect.any(Object));
    // expect(props.isLoading).toEqual(true); // TODO: test with useState

    act(() => {
      jest.runAllTimers();
    });
 
    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });

  it('should simulate [navigate] when clicked', () => {
    rendered = renderer.create(component);
    root = rendered.root;

    const buttons = root.findAllByType(Button);
    buttons[1].props.onClick();
    expect(props.history.push).toBeCalledWith({
      pathname: '/404',
      state: {},
    });
  });

  it('should change theme when [change theme] has been clicked', () => {
    renderResult = render(component);
    const btnChangeTheme = renderResult.getByText(getString('CHANGE_THEME'));
    const clickResult1 = fireEvent.click(btnChangeTheme);
    expect(clickResult1).toBe(true);
    const clickResult2 = fireEvent.click(btnChangeTheme);
    expect(clickResult2).toBe(true);
  });  
});

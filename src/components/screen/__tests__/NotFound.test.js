import React from 'react';
import renderer from 'react-test-renderer';

import NotFound from '../NotFound';
import Button from '../../shared/Button';

// test for the container page in dom
describe('NotFound page DOM rendering test', () => {
  let tree;
  const component = <NotFound {...props} />;

  it('component and snapshot matches', () => {
    tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const props = {
  history: {
    goBack: jest.fn(),
  },
};

describe('Interaction', () => {
  let rendered;
  let instance;
  const component = <NotFound {...props} />;

  beforeAll(() => {
    rendered = renderer.create(component);
    instance = rendered.root;
  });

  it('Simulate onClick', () => {
    // const spy = jest.spyOn(rendered.getInstance(), 'onClick');
    const button = instance.findByType(Button);
    button.props.onClick();
    expect(props.history.goBack).toBeCalled();
  });
});

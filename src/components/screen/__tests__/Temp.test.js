import React from 'react';
import renderer from 'react-test-renderer';

import Temp from '../Temp';
import Button from '../../shared/Button';

// test for the container page in dom
describe('Temp page DOM rendering test', () => {
  let tree;
  const component = <Temp {...props} />;

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
  const component = <Temp {...props} />;

  beforeAll(() => {
    rendered = renderer.create(component);
    instance = rendered.root;
  });

  it('Simulate onClick', () => {
    // const spy = jest.spyOn(rendered.getInstance(), 'onClick');
    const button = instance.findByType(Button);
    button.props.onPress();
    expect(props.history.goBack).toBeCalled();
  });
});

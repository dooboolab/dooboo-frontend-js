import React from 'react';
import { Button } from '../Button';

import renderer from 'react-test-renderer';
import { IC_FACEBOOK_W } from '../../../utils/Icons';

// test for the pure component
describe('Button shared component test', () => {
  let tree;
  const component = <Button white={true} txt='Button 2nd test' />;

  it('component and snapshot matches', () => {
    tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Transparent Interaction', () => {
  let count = 1;
  const onClick = () => {
    count++;
  };

  let rendered;
  let instance;
  const component = <Button onPress={onClick}/>;

  beforeAll(() => {
    rendered = renderer.create(component);
    instance = rendered.root;
  });

  it('Simulate onClick', () => {
    const button = instance.find(
      (el: any) => el.type === 'button',
    );
    button.props.onPress();
    expect(count).toBe(2);
  });
});

describe('WhiteButton Interaction', () => {
  let count = 1;
  const onClick = () => {
    count++;
  };

  let instance;
  let root;
  let component;

  it('Simulate onClick', () => {
    component = <Button white={true} onPress={onClick}/>;
    instance = renderer.create(component);
    root = instance.root;

    const button = root.find(
      (el: any) => el.type === 'button',
    );
    button.props.onPress();
    expect(count).toBe(2);
  });

  it('Render isLoading status', () => {
    component = <Button white={true} isLoading={true}/>;
    instance = renderer.create(component);
    root = instance.root;
  });

  it('Render img status', () => {
    component = <Button white={true} imgSrc={IC_FACEBOOK_W}/>;
    instance = renderer.create(component);
    root = instance.root;
  });
});

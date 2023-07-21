import React from 'react';
import renderer from 'react-test-renderer';
import KeyPad from '../components/KeyPad';

describe('test Calculator component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<KeyPad />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

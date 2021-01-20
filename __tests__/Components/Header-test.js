import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../Components/Header';

describe('test header container component', () => {
  it('match snapshot', () => {
    const snap = renderer.create(
    <Header 
        text="Register"
    />
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
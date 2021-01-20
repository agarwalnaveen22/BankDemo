import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../Components/Button';

describe('test button container component', () => {
  it('match snapshot', () => {
    const snap = renderer.create(
    <Button 
        onButtonPress={() => jest.fn()}
        buttonCaption="Save"
    />
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
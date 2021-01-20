/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import {Provider, useSelector} from 'react-redux';
import MockedNavigator from '../../__mocks__/MockedNavigation';
import Thanks from '../../Screens/Thanks';

const mockStore = configureMockStore();
const store = mockStore();

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
}));

describe('test thanks page design and functionality', () => {
    beforeEach(() => {
        const mockAppState = {
            register: {
                name: ''
            } 
        }
        useSelector.mockImplementation(callback => {
          return callback(mockAppState);
        });
    });

    afterEach(() => {
        useSelector.mockClear();
    });

    it('match snapshot', async () => {
        var snap = await renderer.create(
            <Provider store={store}>
                <MockedNavigator component={Thanks} />
            </Provider>
        );
        expect(snap.toJSON()).toMatchSnapshot();
    });
});

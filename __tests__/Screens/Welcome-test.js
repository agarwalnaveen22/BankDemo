/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider, useSelector } from 'react-redux';
import MockedNavigator from '../../__mocks__/MockedNavigation';
import Welcome from '../../Screens/Welcome';

const mockStore = configureMockStore();
const store = mockStore();

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
}));

describe('test welcome page design and functionality', () => {
    var snap;
    beforeEach( async () => {
        const mockAppState = {
            register: {
                name: ''
            }
        }
        useSelector.mockImplementation(callback => {
            return callback(mockAppState);
        });

        snap = await renderer.create(
            <Provider store={store}>
                <MockedNavigator component={Welcome} />
            </Provider>,
        );
    });

    afterEach(() => {
        useSelector.mockClear();
        jest.clearAllMocks();
    });

    it('match snapshot', async () => {
        expect(snap.toJSON()).toMatchSnapshot();
    });
});

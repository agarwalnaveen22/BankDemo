/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider, useSelector } from 'react-redux';
import MockedNavigator from '../../__mocks__/MockedNavigation';
import Register from '../../Screens/Register';

const mockStore = configureMockStore();
const store = mockStore();

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
}));

describe('test register page design and functionality', () => {
    var snap;
    var userName = '';
    beforeEach( async () => {
        const mockAppState = {
            register: {
                name: userName
            }
        }
        useSelector.mockImplementation(callback => {
            return callback(mockAppState);
        });

        snap = await renderer.create(
            <Provider store={store}>
                <MockedNavigator component={Register} />
            </Provider>,
        );
    });

    afterEach(() => {
        useSelector.mockClear();
    });

    it('match snapshot', async () => {
        expect(snap.toJSON()).toMatchSnapshot();
    });

    it('submit button called if name is blank', () => {
        const testInstance = snap.root;
        const button = testInstance.findByProps({buttonCaption: "Save"}).children;
        const registerData = useSelector((state) => state.register);
        act(() => {
            button[0].props.onPress();
        });
        expect(registerData.name).toEqual(userName);
        userName = 'Naveen';
    });

    it('if user type name', () => {
        const testInstance = snap.root;
        const textInput = testInstance.findByProps({testID: 'registerText'}).children;
        act(() => {
            textInput[0].props.onChangeText();
        });
        expect(textInput[0].props.value).toEqual(userName);
    });

    it('submit button called if name is not blank', () => {
        const testInstance = snap.root;
        const button = testInstance.findByProps({buttonCaption: "Save"}).children;
        const registerData = useSelector((state) => state.register);
        act(() => {
            button[0].props.onPress();
        });
        expect(registerData.name).toEqual(userName);
    });
});

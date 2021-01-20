/**
 * Investec React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions, SafeAreaView, StatusBar } from 'react-native';
import AppRouter from './Routes';
import Reducers from './Reducers';
import CommonStyleSheets from './Utilities/CommonStyleSheets';
import { NavigationContainer } from '@react-navigation/native';

const store = createStore(Reducers);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={[CommonStyleSheets.container, styles.container]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={styles.container.backgroundColor}
        />
        <NavigationContainer>
          <AppRouter />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

let { width } = Dimensions.get('window');
EStyleSheet.build({
  $rem: width / 380,
  $primaryColor: '#6db2f7',
  $secondaryColor: '#ffffff',
  $errorColor: '#ff0000',
});

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$primaryColor',
  },
});

export default App;

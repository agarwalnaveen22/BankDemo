import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './Screens/Register';
import Welcome from './Screens/Welcome';
import Thanks from './Screens/Thanks';

const Stack = createStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="thanks" component={Thanks} />
    </Stack.Navigator>
  );
};

export default AppRouter;

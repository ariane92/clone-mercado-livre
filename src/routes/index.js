import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import LoginEmail from '../screen/LoginEmail';
import LoginPassword from '../screen/LoginPassword';
const AppRoutes = createStackNavigator();

const routes = () => {
  return (
    <NavigationContainer>
      <AppRoutes.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AppRoutes.Screen name="Home" component={Home} />
        <AppRoutes.Screen name="LoginEmail" component={LoginEmail} />
        <AppRoutes.Screen name="LoginPassword" component={LoginPassword} />
      </AppRoutes.Navigator>
    </NavigationContainer>
  );
};

export default routes;

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import Login from '../screen/Login';
const AppRoutes = createStackNavigator();

const routes = () => {
  return (
    <NavigationContainer>
      <AppRoutes.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AppRoutes.Screen name="Home" component={Home} />
        <AppRoutes.Screen name="Login" component={Login} />
      </AppRoutes.Navigator>
    </NavigationContainer>
  );
};

export default routes;

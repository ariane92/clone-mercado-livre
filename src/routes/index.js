import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
const AppRoutes = createStackNavigator();

const routes = () => {
  return (
    <NavigationContainer>
      <AppRoutes.Navigator>
        <AppRoutes.Screen name="Home" component={Home} />
      </AppRoutes.Navigator>
    </NavigationContainer>
  );
};

export default routes;

import 'react-native-gesture-handler';
import React from 'react';
import {Text, StatusBar} from 'react-native';
import Routes from '../src/routes';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffd700" />
      <Routes />
    </>
  );
};

export default App;

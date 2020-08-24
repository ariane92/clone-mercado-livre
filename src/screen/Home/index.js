import React from 'react';
import {View, Text} from 'react-native';

import logo from '../../assets/logo.png';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonOutline from '../../components/ButtonOutline';
import {Container, Logo} from './styles';

const Home = () => {
  return (
    <Container>
      <Logo source={logo} />
      <ButtonPrimary>Botão 1</ButtonPrimary>
      <ButtonOutline>Botão2</ButtonOutline>
    </Container>
  );
};

export default Home;

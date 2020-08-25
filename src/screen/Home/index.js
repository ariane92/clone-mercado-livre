import React from 'react';
import {View, Text} from 'react-native';

import logo from '../../assets/logo.png';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonOutline from '../../components/ButtonOutline';
import {Container, Logo} from './styles';

const Home = ({navigation}) => {
  return (
    <Container>
      <Logo source={logo} />
      <ButtonPrimary onPress={() => navigation.navigate('Login')}>
        Entrar
      </ButtonPrimary>
      <ButtonOutline>Criar Conta</ButtonOutline>
    </Container>
  );
};

export default Home;

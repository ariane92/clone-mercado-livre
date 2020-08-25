import React from 'react';
import {View, Text} from 'react-native';

import logo from '../../assets/logo.png';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonOutline from '../../components/ButtonOutline';
import {Container, Logo, Label} from './styles';

const Home = ({navigation}) => {
  return (
    <Container>
      <Logo source={logo} />
      <ButtonPrimary>Cadastrar-me com meu e-mail</ButtonPrimary>
      <ButtonOutline onPress={() => navigation.navigate('Login')}>
        Já tenho conta
      </ButtonOutline>
      <Label>
        Ao me cadastrar declaro que sou maior de idade e aceito a Politica de
        Privacidade e os Termos e Condições do Mercado Livre e do Mercado Pago
      </Label>
    </Container>
  );
};

export default Home;

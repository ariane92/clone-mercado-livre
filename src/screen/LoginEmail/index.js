import React from 'react';
import {View} from 'react-native';
import Input from '../../components/Input';
import {Container} from './styles';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonOutline from '../../components/ButtonOutline';
import Header from '../../components/Header';

const Login = ({navigation}) => {
  return (
    <Container>
      <Header>Olá! Para continuar, digite o seu {'\n'}e-mail ou usuário</Header>
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        name="email"
        placeholder="E-mail ou usuário"
      />
      <ButtonPrimary onPress={() => navigation.navigate('LoginPassword')}>
        Continuar
      </ButtonPrimary>
      <ButtonOutline>Criar conta</ButtonOutline>
    </Container>
  );
};

export default Login;

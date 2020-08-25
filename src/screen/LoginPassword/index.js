import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';

import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonOutline from '../../components/ButtonOutline';
import Header from '../../components/Header';

import {Container} from './styles';

const LoginPassword = ({navigation}) => {
  return (
    <Container>
      <Icon
        name="arrow-left"
        size={20}
        color="#000"
        style={{marginTop: 30}}
        onPress={() => navigation.goBack()}
      />
      <Header>Agora, a sua senha</Header>
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        name="password"
        placeholder="Senha"
        secureTextEntry
      />
      <ButtonPrimary>Entrar</ButtonPrimary>
      <ButtonOutline>Não sei a minha senha</ButtonOutline>
    </Container>
  );
};

export default LoginPassword;

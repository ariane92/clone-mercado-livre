import React from 'react';

import Input from '../../components/Input';

import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonOutline from '../../components/ButtonOutline';
import Header from '../../components/Header';

import {Container} from './styles';

const LoginPassword = () => {
  return (
    <Container>
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

import React from 'react';
import {View, Text} from 'react-native';

import {Container, ButtonText} from './styles';

const ButtonPrimary = (props) => {
  return (
    <Container onPress={props.onPress}>
      <ButtonText>{props.children}</ButtonText>
    </Container>
  );
};

export default ButtonPrimary;

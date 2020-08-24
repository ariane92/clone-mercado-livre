import React from 'react';
import {View, Text} from 'react-native';

import {Container, ButtonText} from './styles';

const ButtonOutline = (props) => {
  return (
    <Container>
      <ButtonText>{props.children}</ButtonText>
    </Container>
  );
};

export default ButtonOutline;

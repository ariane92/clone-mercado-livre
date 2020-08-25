import React from 'react';
import {View} from 'react-native';

import {Container, TextInput} from './styles';

const Input = (props) => {
  return (
    <Container>
      <TextInput {...props} />
    </Container>
  );
};

export default Input;

import React from 'react';
import {View} from 'react-native';

import {Container, Title} from './styles';

const Header = (props) => {
  return (
    <Container>
      <Title>{props.children}</Title>
    </Container>
  );
};

export default Header;

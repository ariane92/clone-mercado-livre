import styled from 'styled-components/native';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  background-color: #3483fa;
  border-radius: 6px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'Roboto-Medium';
`;

import styled from 'styled-components/native';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  border-color: #3483fa;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #000;
`;

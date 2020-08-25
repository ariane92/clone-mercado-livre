import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #3483fa;
  font-family: 'Roboto-Medium';
`;

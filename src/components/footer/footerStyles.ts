import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const FooterContainer = styled.View`
  flex: 2;
  width: 100%;
  align-items: center;
  background-color: whitesmoke;
`;

export const CalculateButton = styled.TouchableOpacity`
  height: 30%;
  width: 50%;
  background-color: grey;
  border-radius: 5;
  margin: 15px;
`;

export const AnimationContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
`;

import styled from 'styled-components/native';

export const LoginContainer = styled.View`
  flex: 1;
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
`;

export const Password = styled.TextInput`
  height: 50;
  width: 80%;
  background-color: white;
`;

export const Username = styled(Password)`
  border-bottom-color: grey;
  border-bottom-width: 0.5;
`;

export const Instructions = styled.Text`
  text-align: center;
  padding: 40px;
`;

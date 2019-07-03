import styled from 'styled-components/native';

export const AntContainer = styled.View`
  flex: 1;
  flex-direction: row;
  height: 100;
  width: 90%;
  border-bottom-color: grey;
  border-bottom-width: 0.3;
  border-right-color: grey;
  border-right-width: 0.3;
  margin-bottom: 5;
  margin-top: 5;
  background-color: white;
`;

export const AntStatus = styled.View`
  height: 100%;
  width: 100;
  background-color: ${(props:{ statusColor:string }) => props.statusColor};
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 10;
`;

export const StatusText = styled.Text`
  color: white;
`;

export const Title = styled.Text`
`;

export const Value = styled(Title)`
  font-weight: bold;
`;

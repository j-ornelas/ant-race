import { gql } from 'apollo-boost';

export const GET_ANTS = gql`
  {
    ants {
      length
      color
      name
      weight
    }
  }
`;

import { gql } from "@apollo/client";

export const GET_PRODUCT_BY_ID = gql`
  query getProductById($characterId: ID!) {
    character(id: $characterId) {
      image
      name
      status
    }
  }
`;

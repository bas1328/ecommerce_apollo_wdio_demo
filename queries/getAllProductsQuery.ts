import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS_QUERY = gql`
  query getProducts {
    characters(page: 2, filter: { name: "Morty" }) {
      info {
        count
      }
      results {
        name
        image
        id
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;

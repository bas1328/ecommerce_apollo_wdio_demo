import { GET_ALL_PRODUCTS_QUERY } from "queries/getAllProductsQuery";
import createApolloClient from "apollo-client";
import { Character } from "@/gql/graphql";

import ProductCard from "@/components/ui/ProductCard/ProductCard";

import styles from "./ProductList.module.scss";
interface IProductList {
  characters: Character[];
}
export default function ProductList({ characters }: IProductList) {
  return (
    <main className={styles.main}>
      <h1>Our products</h1>
      {Boolean(characters) && Boolean(characters.length) ? (
        <ul>
          {characters?.map(({ name, image, id }) => (
            <li key={id}>
              <ProductCard
                name={name || "T-shirt"}
                image={image || "/tshirt.png"}
                // edge case, id should be always provided
                id={id || Math.random().toString()}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </main>
  );
}

export async function getServerSideProps() {
  const client = createApolloClient();

  const { data } = await client.query({
    query: GET_ALL_PRODUCTS_QUERY,
  });

  return {
    props: {
      characters: data.characters.results,
    },
  };
}

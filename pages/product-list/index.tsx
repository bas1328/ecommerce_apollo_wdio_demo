import Link from "next/link";
import { GET_ALL_PRODUCTS_QUERY } from "queries/getAllProductsQuery";

import styles from "./ProductList.module.scss";
import createApolloClient from "apollo-client";
import ProductCard from "@/components/ui/ProductCard/ProductCard";

// TODO: add types
export default function ProductList({ characters }: any) {
  return (
    <main className={styles.main}>
      <h1>Our products</h1>
      {Boolean(characters) ? (
        <ul>
          {characters?.map((product: any) => (
            <li key={product.id}>
              <ProductCard
                name={product.name}
                image={product.image}
                id={product.id}
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

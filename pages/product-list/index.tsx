import Link from "next/link";
import ProductItem from "@/pages/product-list/components/ProductItem/ProductItem";
import { mockProducts } from "@/utils/common";

import styles from "./ProductList.module.scss";
import createApolloClient from "@/apollo-client";
import { gql } from "@apollo/client";
import { GET_ALL_PRODUCTS_QUERY } from "@/queries/getAllProductsQuery";

export default function ProductList({ characters }: any) {
  console.log(characters);
  return (
    <main className={styles.main}>
      {Boolean(characters) ? (
        <>
          <h1>Our products</h1>
          <ul>
            {characters?.map((product: any) => (
              <Link key={product.id} href={`/product-list/${product.id}`}>
                <li>
                  <ProductItem name={product.name} image={product.image} />
                </li>
              </Link>
            ))}
          </ul>{" "}
        </>
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

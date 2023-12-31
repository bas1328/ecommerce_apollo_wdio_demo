import styles from "./ProductItem.module.scss";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_PRODUCT_BY_ID } from "@/queries/getProductByIdQuery";
import ProductCard from "@/components/ui/ProductCard/ProductCard";

export default function ProductDescriptionPage() {
  const { id } = useRouter().query;

  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      characterId: id,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const product = data.character;

  return (
    <main className={styles.main}>
      <ProductCard
        name={product.name}
        image={product.image}
        id={id as string}
      />
    </main>
  );
}

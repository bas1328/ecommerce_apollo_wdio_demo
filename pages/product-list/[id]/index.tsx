import Image from "next/image";
import styles from "./ProductItem.module.scss";
import ProductItem from "@/pages/product-list/components/ProductItem/ProductItem";

export default function ProductDescriptionPage() {
  //TODO graphql call for a single item, probably from server side props
  const getMockedProduct = () => {
    return {
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    };
  };

  return (
    <main className={styles.main}>
      <ProductItem
        name={getMockedProduct().name}
        image={getMockedProduct().image}
      />
    </main>
  );
}

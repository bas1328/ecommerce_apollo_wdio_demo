import Image from "next/image";
import styles from "./ProductList.module.scss";
import { mockProducts } from "@/utils/common";

export default function ProductList() {
  return (
    <main className={styles.main}>
      <h1>Our products</h1>
      <ul>
        {mockProducts.data.characters.results.map((product: any) => (
          <li key={product.id}>
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
            />
            <h2>{product.name}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
}

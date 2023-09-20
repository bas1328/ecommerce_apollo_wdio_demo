import Link from "next/link";
import ProductItem from "@/pages/product-list/components/ProductItem/ProductItem";
import { mockProducts } from "@/utils/common";

import styles from "./ProductList.module.scss";

export default function ProductList() {
  return (
    <main className={styles.main}>
      <h1>Our products</h1>
      <ul>
        {mockProducts.data.characters.results.map((product: any) => (
          <Link key={product.id} href={`/product-list/${product.id}`}>
            <li>
              <ProductItem name={product.name} image={product.image} />
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}

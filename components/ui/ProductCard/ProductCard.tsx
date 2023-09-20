import Link from "next/link";
import Tshirt from "../Tshirt/Tshirt";

import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  name?: string;
  image?: string;
  id?: string;
}
export default function ProductItem({ name, image, id }: ProductCardProps) {
  function addToCartHandler() {
    alert("Add to cart");
  }
  return (
    <div className={styles.container}>
      <Link href={`/product-list/${id}`}>
        <Tshirt name={name} image={image} />
        <h2>{name}</h2>
      </Link>
      <button onClick={addToCartHandler}>Add to cart</button>
    </div>
  );
}

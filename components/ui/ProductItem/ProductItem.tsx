import Image from "next/image";
import Link from "next/link";

import styles from "./ProductItem.module.scss";
interface ProductItemProps {
  name: string;
  image: string;
  id: string;
}
export default function ProductItem({ name, image, id }: ProductItemProps) {
  function addToCartHandler() {
    alert("Add to cart");
  }
  return (
    <>
      <Link href={`/product-list/${id}`}>
        <h1>Product Item</h1>
        <div className={styles.wrapper}>
          <Image className={styles.base} src="/tshirt.png" alt={name} width={600} height={600} />
          <Image className={styles.printImage} src={image} alt={name} width={200} height={200} />
        </div>

        <h2>{name}</h2>
      </Link>
      <button onClick={addToCartHandler}>Add to cart</button>
    </>
  );
}

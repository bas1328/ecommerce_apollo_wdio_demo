import Image from "next/image";
import Link from "next/link";
import React from "react";
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
        <Image src={image} alt={name} width={500} height={500} />
        <h2>{name}</h2>
      </Link>
      <button onClick={addToCartHandler}>Add to cart</button>
    </>
  );
}

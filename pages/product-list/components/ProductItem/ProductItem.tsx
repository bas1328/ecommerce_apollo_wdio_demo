import Image from "next/image";
import React from "react";
interface ProductItemProps {
  name: string;
  image: string;
}
export default function ProductItem({ name, image }: ProductItemProps) {
  return (
    <>
      <h1>Product Item</h1>
      <Image src={image} alt={name} width={500} height={500} />
      <h2>{name}</h2>
    </>
  );
}

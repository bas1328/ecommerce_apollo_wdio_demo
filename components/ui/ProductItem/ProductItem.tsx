import Image from "next/image";
import Link from "next/link";
import Tshirt from "../Tshirt/Tshirt";

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
        <Tshirt name={name} image={image} />
        <h2>{name}</h2>
      </Link>
      <button onClick={addToCartHandler}>Add to cart</button>
    </>
  );
}

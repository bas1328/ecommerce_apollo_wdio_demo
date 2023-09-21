import { useContext } from "react";
import Link from "next/link";
import Tshirt from "../Tshirt/Tshirt";

import styles from "./ProductCard.module.scss";
import { BasketContext } from "@/pages/_app";
import { Character } from "@/gql/graphql";

interface ProductCardProps {
  name?: string;
  image?: string;
  id?: string;
}

import { Fira_Code } from "next/font/google";

const inter = Fira_Code({ subsets: ["latin"] });

export default function ProductItem({ name, image, id }: ProductCardProps) {
  const { setBasketItems } = useContext(BasketContext);


  const addToCartHandler = () => {
    //TODO: remove type casting
    setBasketItems((state) => [...state, { name, image, id } as Character]);
  };

  return (
    <div className={`${styles.container} ${inter.className}`}>
      <Link href={`/product-list/${id}`}>
        <Tshirt name={name} image={image} />
        <h2>{name}</h2>
      </Link>
      <button onClick={addToCartHandler}> Add to cart</button>
    </div>
  );
}

import Link from "next/link";
import { Fira_Code } from "next/font/google";

import styles from "./Navbar.module.scss";
import MiniBasketButton from "../MiniBasket/MiniBasket";

const inter = Fira_Code({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <div>
        <Link href="/">home |</Link>
        <Link href="/product-list">| our t-shirts</Link>
      </div>
      <MiniBasketButton />
    </div>
  );
}

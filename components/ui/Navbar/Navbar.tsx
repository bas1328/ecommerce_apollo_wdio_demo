import Image from "next/image";
import Link from "next/link";
import { Fira_Code } from "next/font/google";

import styles from "./Navbar.module.scss";

const inter = Fira_Code({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <div>
        <Link href="/">home |</Link>
        <Link href="/product-list">| our t-shirts</Link>
      </div>
      <button>
        <Image src="/basket.png" alt="baslet" width={30} height={30} />
      </button>
    </div>
  );
}

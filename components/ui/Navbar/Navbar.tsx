import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/">home 🏠</Link>
      <Link href="/product-list">our products 👕</Link>
    </div>
  );
}

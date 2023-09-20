import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link id="home-link" href="/">Home</Link>
      <Link id='product-list-link' href="/product-list">Our products</Link>
    </div>
  );
}

import React from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div>Home</div>
      <div>Our products</div>
    </div>
  );
}

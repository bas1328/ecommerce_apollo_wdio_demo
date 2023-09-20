import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>demo shop</title>
        <meta name="description" content="demo ecommerce shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aspernatur!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tempora deserunt quia nostrum temporibus ipsa. Esse libero animi quo ex facilis sequi vitae, reprehenderit quasi officiis officia ducimus nesciunt rerum?</p>
      </main>
    </>
  );
}

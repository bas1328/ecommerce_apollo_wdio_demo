import Image from "next/image";
import styles from "./Tshirt.module.scss";

interface TshirtProps {
  name: string;
  image: string;
}

export default function Tshirt({ name, image }: TshirtProps) {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.base}
        src="/tshirt.png"
        alt={name}
        width={500}
        height={500}
      />
      <Image
        className={styles.printImage}
        src={image}
        alt={name}
        width={150}
        height={150}
      />
    </div>
  );
}

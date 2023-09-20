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
        width={600}
        height={600}
      />
      <Image
        className={styles.printImage}
        src={image}
        alt={name}
        width={200}
        height={200}
      />
    </div>
  );
}

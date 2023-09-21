import Image from "next/image";
import styles from "./Tshirt.module.scss";

interface TshirtProps {
  name?: string;
  image?: string;
}

export default function Tshirt({ name, image }: TshirtProps) {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.base}
        src="/tshirt.png"
        alt={name || "T-shirt"}
        width={300}
        height={300}
      />
      <Image
        className={styles.printImage}
        src={image || "/tshirt.png"}
        alt={name || "T-shirt-print"}
        width={100}
        height={100}
      />
    </div>
  );
}

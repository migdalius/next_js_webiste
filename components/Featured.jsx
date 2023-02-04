import Image from "next/image";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.right}></div>
      <div className={styles.left}>
        <Image src="/img/profil.png" alt="" width={400} height={400} />
      </div>
    </div>
  );
};

export default Featured;

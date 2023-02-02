import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width={50} height={50} />
        </div>
      </div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  );
};

export default Navbar;

import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}></div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Image src="/img/logo.png" alt="" width={130} height={35} />
          <li className={styles.listItem}>Home Page</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>

          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width={30} height={30} />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

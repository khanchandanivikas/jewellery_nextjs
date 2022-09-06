import Link from "next/link";
import styles from "../../scss/Hamburger.module.scss";

const Hamburger = (props) => {
  const toggleHamburger = props.toggleHamburger;
  const hamburgerState = props.hamburgerState;
  return (
    <div
      className={
        hamburgerState ? styles.hamburgerMenu : styles.hamburgerMenuHide
      }
    >
      <ul id="ham" className={styles.hamburgerMenu_list}>
        <li
          onClick={toggleHamburger}
          className={styles.hamburgerMenu_list_link}
        >
          <Link href="/">HOME</Link>
        </li>
        <li
          onClick={toggleHamburger}
          className={styles.hamburgerMenu_list_link}
        >
          <Link href="/about">ABOUT</Link>
        </li>
        <li
          onClick={toggleHamburger}
          className={styles.hamburgerMenu_list_link}
        >
          <Link href="/shop">SHOP</Link>
        </li>
        <li
          onClick={toggleHamburger}
          className={styles.hamburgerMenu_list_link}
        >
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;

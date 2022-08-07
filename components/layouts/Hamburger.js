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
        <li className={styles.hamburgerMenu_list_link}>
          <Link href="/" onClick={toggleHamburger}>
            HOME
          </Link>
        </li>
        <li className={styles.hamburgerMenu_list_link}>
          <Link href="/about" onClick={toggleHamburger}>
            ABOUT
          </Link>
        </li>
        <li className={styles.hamburgerMenu_list_link}>
          <Link href="/shop" onClick={toggleHamburger}>
            SHOP
          </Link>
        </li>
        <li className={styles.hamburgerMenu_list_link}>
          <Link href="/contact" onClick={toggleHamburger}>
            CONTACT
          </Link>
        </li>
        <li className={styles.hamburgerMenu_list_link}>
          <Link href="/product" onClick={toggleHamburger}>
            CATEGORIES
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;

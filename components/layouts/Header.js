import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faBars,
  faUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../images/logo.png";
import styles from "../../scss/Header.module.scss";

const Header = (props) => {
  const toggleHamburger = props.toggleHamburger;

  return (
    <header className={styles.myHeader}>
      <Link href="/">
        <div className={styles.logo}>
          <Image src={Logo} alt="jewellery_logo" width={140} height={40} />
        </div>
      </Link>
      <div className={styles.cart_hamburger}>
        <Link href="/login">
          <a>
            <FontAwesomeIcon icon={faUser} />
          </a>
        </Link>
        <Link href="/checkout">
          <a>
            <FontAwesomeIcon icon={faBasketShopping} />
          </a>
        </Link>
        <button>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </button>
        <FontAwesomeIcon
          className={styles.hamburgerIcon}
          onClick={toggleHamburger}
          icon={faBars}
        />
      </div>
    </header>
  );
};

export default Header;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faBars,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Logo from "../../images/logo.png";
import styles from "../../scss/Header.module.scss";
import Link from "next/link";

const Header = (props) => {
  const toggleHamburger = props.toggleHamburger;

  return (
    <header className={styles.myHeader}>
      <Link href="/">
        <div className={styles.myHeader_logo}>
          <Image src={Logo} alt="jewellery_logo" width={140} height={40} />
        </div>
      </Link>
      <div className={styles.myHeader_cart_hamburger}>
        <Link href="/login">
          <>
            <FontAwesomeIcon icon={faUser} />
          </>
        </Link>
        <FontAwesomeIcon icon={faBasketShopping} />
        <FontAwesomeIcon onClick={toggleHamburger} icon={faBars} />
      </div>
    </header>
  );
};

export default Header;

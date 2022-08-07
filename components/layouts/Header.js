import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Logo from "../../images/logo.png";
import styles from "../../scss/Header.module.scss";
import hamburgerLinksAnimation from "../../scripts/animations";

const Header = (props) => {
  const toggleHamburger = props.toggleHamburger;

  return (
    <header className={styles.myHeader}>
      <div className={styles.myHeader_logo}>
        <Image src={Logo} alt="jewellery_logo" width={140} height={40} />
      </div>
      <div className={styles.myHeader_cart_hamburger}>
        <FontAwesomeIcon icon={faBasketShopping} />
        <FontAwesomeIcon onClick={toggleHamburger} icon={faBars} />
      </div>
    </header>
  );
};

export default Header;

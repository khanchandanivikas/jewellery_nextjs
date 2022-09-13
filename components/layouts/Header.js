import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Sling as Hamburger } from "hamburger-react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { removeUser } from "../../store/reducers/authReducers";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../images/logo.png";
import styles from "../../scss/Header.module.scss";

const Header = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.currentUser);
  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      toast.success("Signed out");
    } catch (error) {
      console.log(error);
      toast.error("Signout error");
    }
  };

  const toggleHamburger = props.toggleHamburger;
  const hamburger = props.hamburgerState;

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
        {user.token && (
          <button onClick={() => logout()}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </button>
        )}
        <div className={styles.hamburgerIcon} onClick={toggleHamburger}>
          <Hamburger size={20} toggled={hamburger} />
        </div>
      </div>
      <Toaster />
    </header>
  );
};

export default Header;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Sling as Hamburger } from "hamburger-react";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, deleteUser } from "firebase/auth";
import { auth, db } from "../../config/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { removeUser } from "../../store/reducers/authReducers";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../images/logo.png";
import styles from "../../scss/Header.module.scss";

const Header = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.currentUser);
  const cartNumber = useSelector((state) => state.cartReducer.cartNumber);

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

  const deleteAccount = async (user) => {
    try {
      const docToDelete = doc(db, "users", user.uid);
      await deleteDoc(docToDelete);
      await deleteUser(user);
      toast.success("Account deleted");
      dispatch(removeUser());
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Error deleting account");
    }
  };

  const account = () => {
    if (user.token) {
      Swal.fire({
        title: "Logged in as:",
        text: user.email,
        showCancelButton: true,
        cancelButtonText: "Ok",
        cancelButtonColor: "#775A4C",
        confirmButtonColor: "#d73737",
        confirmButtonText: "Delete Account",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteAccount(auth.currentUser);
        }
      });
    } else {
      router.push("/login");
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
        <button onClick={account}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        <Link href="/checkout">
          <a>
            <FontAwesomeIcon icon={faBasketShopping} /> ({cartNumber})
          </a>
        </Link>
        {user.token && (
          <button onClick={logout}>
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

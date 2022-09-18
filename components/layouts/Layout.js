import { gsap } from "gsap";
import { useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Hamburger from "../layouts/Hamburger";
import Meta from "./Meta";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";

const Layout = ({ children }) => {
  const [hamburgerState, setHamburgerState] = useState(false);
  const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });
  const toggleHamburger = () => {
    setHamburgerState(!hamburgerState);
    {
      hamburgerState
        ? timeline.to("#ham li", {
            translateX: "0",
            opacity: 1,
            duration: 0.6,
          })
        : timeline.from("#ham li", {
            translateX: "150px",
            opacity: 0,
            duration: 0.6,
            delay: 0.5,
            stagger: 0.2,
          });
    }
  };

  return (
    <>
      <Meta />
      <Header
        hamburgerState={hamburgerState}
        toggleHamburger={toggleHamburger}
      />
      <Hamburger
        hamburgerState={hamburgerState}
        toggleHamburger={toggleHamburger}
      />
      <main>{children}</main>
      <Footer />
      <CookieConsent
        buttonText="Accept"
        buttonStyle={{
          backgroundColor: "#775A4C",
          color: "white",
          border: "1px solid #ccc"
        }}
      >
        <span>
          This website uses cookies. If you want to continue, please accept its
          use. Read more about our cookie policies.
        </span>
        <Link href="/">
          <a target="blank" className="text-white">
            cookie policies
          </a>
        </Link>
      </CookieConsent>
    </>
  );
};

export default Layout;

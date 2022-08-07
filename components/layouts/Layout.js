import { gsap } from "gsap";
import { useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Hamburger from "../layouts/Hamburger";
import Meta from "./Meta";

const Layout = ({ children }) => {
  const [hamburgerState, setHamburgerState] = useState(false);
  const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });
  const toggleHamburger = () => {
    setHamburgerState(!hamburgerState);
    {hamburgerState ? timeline.to("#ham li", {
      translateX: "0",
      opacity: 1,
      duration: 0.6,
    }) : timeline.from("#ham li", {
      translateX: "150px",
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      stagger: 0.2,
    })}
  };

  return (
    <>
      <Meta />
      <Header toggleHamburger={toggleHamburger} />
      <Hamburger
        hamburgerState={hamburgerState}
        toggleHamburger={toggleHamburger}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

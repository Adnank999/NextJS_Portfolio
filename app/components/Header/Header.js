"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import React, { useEffect, useState } from "react";
import CodingSVG from "../CodingSVG";
import AboutDrawer from "../AboutDrawer";

import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import MobileDrawer from "../MobileDrawer";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add a scroll event listener to track scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.header} ${
        scrolled ? styles.black : styles.transparent
      }`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="xs:ml-2 sm:ml-4 md:ml-6 ">
          <Link href="/">
            <CodingSVG />
          </Link>
        </div>

        <div className="md:hidden z-100">
          <MobileDrawer />
        </div>

     
          <ul className="hidden md:flex gap-6 mr-10">
            <li>
              <Link href="/" className={`text-white`}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/project" className={`text-white`}>
                Projects
              </Link>
            </li>

            <li>
              <AboutDrawer />
            </li>

            <li>
              <Link href="/contact" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        
      </div>
    </div>
  );
};

export default Header;

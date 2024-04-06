import React, { useState } from "react";
import style from "./navbar.module.css";
import logo from "/framer-logo.png";
import { FaBarsStaggered } from "react-icons/fa6";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className={style.navbarflex}>
      <div className={style.logo}>
        <img src={logo} alt="" />
      </div>
      <div
        className={`${style.bgNav} ${
          showMobileMenu ? style.showMobileMenu : ""
        }`}
      >
        <ul
          className={`${style.navItems} ${
            showMobileMenu ? style.showMobileMenu : ""
          }`}
        >
          <li>Service</li>
          <li>benefits</li>
          <li>plan</li>
          <li>faqs</li>
          <li>login</li>
        </ul>
        <div className={style.icon} onClick={() => {
          setShowMobileMenu(!showMobileMenu)
        }}>
          <FaBarsStaggered />
        </div>
      </div>
    </nav>
  );
}

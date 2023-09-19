import React, { useState } from "react";
import Logo from "../../img/logo.svg";
import User from "../../img/member-1.png";
import "./Navbar.css";
import { CgMenu, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <img className="logo" src={Logo} alt="logo" />
          </div>
          <div id="menu" className={openMenu ? "menu-icon active" : "menuIcon"}>
            <ul className="nav-list ">
              <li>
                <Link to="/" className="nav-link" onClick={() => setOpenMenu(false)}>Home</Link>
              </li>
              <li>
                <Link to="/discovery" className="nav-link" onClick={() => setOpenMenu(false)}>Discovery</Link>
              </li>
              <li>
                <Link to="/photos" className="nav-link" onClick={() => setOpenMenu(false)}>Photos</Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link" onClick={() => setOpenMenu(false)}>Contact</Link>
              </li>
            </ul>

            <div className="mobile-navbar-btn">
              <CgMenu
                name="menu-outline"
                className="mobile-nav-icon"
                onClick={() => setOpenMenu(true)}
              />
              <CgClose
                name="close-outline"
                className="mobile-nav-icon close-outline"
                onClick={() => setOpenMenu(false)}
              />
            </div>
          </div>
          <img className="user-img" src={User} alt="user" />
        </nav>
      </header>
    </>
  );
};

export default Navbar;

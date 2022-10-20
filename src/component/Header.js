import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.scss";
import MainNav from "./MainNav";
import { BiMenu } from "react-icons/bi";
const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <div className="gnb">
          <h1>
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/header_logo.png`}
                alt=""
              />
            </Link>
          </h1>
          <nav className="mainMenu">
            <MainNav />
          </nav>
          <div className="sideMenu">
            <ul className="language">
              <li>KOR</li>
              <li>ENG</li>
            </ul>
            <div className="menu">
              <BiMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

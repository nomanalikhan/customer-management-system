import React from "react";
import _ from "lodash";
import { NavLink } from "react-router-dom";

const APP_NAME = "Webtrekk";
const links = [
  {
    name: "Customers",
    to: "/customers"
  }
];

const Header = () => (
  <header>
    <nav className="navbar is-white">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item brand-text" href="/">
            {APP_NAME}
          </a>
          <div className="navbar-burger burger" data-target="navMenu">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            {_.map(links, link => (
              <NavLink
                key={link.to}
                to={link.to}
                exact
                activeClassName="is-active"
                className="navbar-item"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;

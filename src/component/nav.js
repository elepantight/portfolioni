import React, { useState } from "react";
import { Link } from "react-router-dom";

import { SidebarData } from "./sideBarData";

function Navigation() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <img
            className="menu_img"
            src={require("./../images/MENY.svg")}
            alt="img"
            onClick={showSidebar}
          />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu_items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <img
                className="menu_img"
                src={require("./../images/MENYX.svg")}
                alt="img"
              />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span className="menu-span">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
export default Navigation;

{
  /*     <>
      <section>
        <nav>
          <div className="hamburger">
          <img
                className="menu_img"
                src={require("./../images/MENY.svg")}
                alt="img"
              />
          </div>
          <NavLink to="/">
            <h3>HOMEPAGE</h3>
          </NavLink>
          <NavLink to="/portfolio">
            <h3>PORTFOLIO</h3>
          </NavLink>
          <NavLink to="/resume">
            <h3>RESUMÉ</h3>
          </NavLink>
          <NavLink to="/contact">
            <h3>CONTACT</h3>
          </NavLink>
          <NavLink to="/gallery" className="nav-gallery">
            <h3>GALLERY</h3>
          </NavLink>
        </nav>
      </section>
</> */
}

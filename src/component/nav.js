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
            className="menu-open"
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
                className="menu-close"
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


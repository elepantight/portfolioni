import React, { useState } from "react";
import { Link } from "react-router-dom";

import { SidebarData } from "./sideBarData";


import MENYX from './../images/MENYX.svg';
import MENY from './../images/MENY.svg';
import LINKEDIN from './../images/linkedin.svg';
import GITHUB from './../images/github.svg';



function Navigation() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <img
            className="menu-open"
            src={MENY}
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
                src={MENYX}
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
          <Link to="#" className="menu-bars">
            <img
              className="linked-icon"
              src={LINKEDIN}
              alt="img"
              href="https://www.linkedin.com/in/arvid-hallberg-410161182/"
              target="_blank"
              rel="noopener noreferrer"
            />
          </Link>
          <Link to="#" className="menu-bars">
            <img
              className="github-icon"
              src={GITHUB}
              alt="img"
            />
          </Link>
        </ul>
      </nav>
    </>
  );
}
export default Navigation;

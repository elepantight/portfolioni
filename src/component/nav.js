import React from "react";
import { NavLink } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

const Navigation = () => {
  return (
    <>
      <section>
        <nav>
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <NavLink to="/">
            <RiArrowGoBackLine />
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
    </>
  );
};
export default Navigation;

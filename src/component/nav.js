import React from "react";
import { NavLink} from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";
import arrow from "./../images/arrow.svg";
const Navigation = () => {
    return (
        <section>
          <nav>
            <NavLink to="/Portfolio">
              <h3>PORTFOLIO</h3>
            </NavLink>
            <NavLink to="/Resume">
              <h3>RESUME</h3>
            </NavLink>
            <NavLink to="/TestPage">
              <h3>ABOUT ME</h3>
            </NavLink>
            <NavLink to="/Contact">
              <h3>CONTACT</h3>
            </NavLink>
          </nav>
        </section>
    );
    }
    export default Navigation;
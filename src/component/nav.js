import React from "react";
import { NavLink} from 'react-router-dom';
const Navigation = () => {
    return (
      <>
        <section >
          <nav>
            <NavLink to="/Portfolio">
              <h3>PORTFOLIO</h3>
            </NavLink>
            <NavLink to="/Resume">
              <h3>RESUME</h3>
            </NavLink>
            <NavLink to="/Contact">
              <h3>CONTACT</h3>
            </NavLink>
          </nav>
        </section>
        </>
    );
    }
    export default Navigation;
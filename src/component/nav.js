import React from 'react';
import { NavLink} from 'react-router-dom';

const Navigation = () => {

  return (
    <section>
    <nav>
        <NavLink to='/Portfolio'><h3>PORTFOLIO</h3></NavLink>
        <NavLink to='/TestPage'><h3>RESUME</h3></NavLink>
        <NavLink to='/TestPage'><h3>ABOUT ME</h3></NavLink>
        <NavLink to='/TestPage'><h3>CONTACT</h3></NavLink>
    </nav>
    </section>
  )
}

export default Navigation
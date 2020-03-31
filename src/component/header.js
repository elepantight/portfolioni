import React from 'react'




function Header() {
    return (
      <header>
        <img
        className="header-img"
        src={require("./../images/logo1.svg")}
        alt="img"
          />
          <h1 className="header-name">ARVID HALLBERG.</h1>
          <p className="header-text">FrontEnd Developer. Likes Design.</p>

      </header>
    )
}

export default Header

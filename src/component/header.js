import React from 'react'




function Header() {
    return (
      <header>
        <img
        className="header-img"
        src={require("./../images/logo1.svg")}
        alt="img"
          />
          <h1 className="h1-text">FrontEnd Developer. Likes Design</h1>

      </header>
    )
}

export default Header

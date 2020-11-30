import React from "react";

function Header() {
  return (
    <header id="no-copy">
      <img
        className="header-img"
        src={require("./../images/logosvart_test2.svg")}
        alt="img"
      />
      <div className="header-text">
        <h1>FrontEnd Developer. Likes Design.</h1>
      </div>
    </header>
  );
}

export default Header;

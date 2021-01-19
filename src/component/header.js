import React from "react";

function Header() {
  return (
    <header id="no-copy">
      <img
        className="header-img"
        src={require("./../images/logogrey_test2.svg")}
        alt="img"
      />
      <img
        className="logo-img"
        src={require("./../images/text.svg")}
        alt="img"
      />


    </header>
  );
}

export default Header;

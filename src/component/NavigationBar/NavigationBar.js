import React, { useEffect } from "react";

const NavLink = (props) => {
  const { navLinkName } = props;

  function handleLinkClick() {
    const element = document.getElementsByClassName(navLinkName)[0];

    element.scrollIntoView();
  }

  return (
    <li><button
          className="navbar-link"
          onClick={handleLinkClick}
        > {navLinkName}
    </button></li>
  );
}

const NavigationBar = () => {
  const navLinks = ['Home', 'Skills', 'Portfolio', 'About'];
  const navLinkMap = navLinks.map((link) => {
    return (
      <NavLink navLinkName={link} />
    );
  });

  useEffect(() => {

  }, []);

  return (
    <div className="navbar-container">
      <ul>
        {navLinkMap}
      </ul>
    </div>
  );
}

export default NavigationBar;
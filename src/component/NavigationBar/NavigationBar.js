import React, { useEffect } from "react";

const NavLink = (props) => {
  const { navLinkName } = props;

  return (
    <li><a
          className="navbar-link"
          id={navLinkName}
          href={navLinkName}
        > {navLinkName}
    </a></li>
  );
}

const NavigationBar = () => {
  const navLinks = ['Home', 'About', 'Skills', 'Portfolio'];
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
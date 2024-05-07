import React, { useEffect, useState } from "react";

const NavLink = (props) => {
  const { navLinkName, setLinkName } = props;

  function handleMouseHover() {
    setLinkName(navLinkName);
  }

  function handleMouseLeave() {
    setLinkName(null);
  }

  return (
    <li><a
          className="navbar-link"
          id={navLinkName}
          href={navLinkName}
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseLeave}
        > {navLinkName}
    </a></li>
  );
}

const NavigationBar = () => {
  const [linkName, setLinkName] = useState(null);

  const navLinks = ['Home', 'About', 'Skills', 'Portfolio'];
  const navLinkMap = navLinks.map((link) => {
    return (
      <NavLink navLinkName={link} setLinkName={setLinkName} />
    );
  });

  function changeColorLink(linkName) {
    const navLinks = document.getElementsByClassName('navbar-link');

    if (!linkName) {
      for (const navLink of navLinks) {
        if (navLink.id !== linkName) {
          navLink.style.color = 'white';
        }
      }
    } else {
      for (const navLink of navLinks) {
        if (navLink.id !== linkName) {
          navLink.style.color = 'grey';
        }
      }
    }
  }

  useEffect(() => {
    changeColorLink(linkName);

  }, [linkName]);

  return (
    <div className="navbar-container">
      <h1>{linkName}</h1>
      <ul>
        {navLinkMap}
      </ul>
    </div>
  );
}

export default NavigationBar;
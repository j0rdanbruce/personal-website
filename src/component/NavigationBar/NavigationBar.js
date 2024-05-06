import React, { useEffect, useState } from "react";

const NavLink = (props) => {
  const { navLinkName, setLinkName } = props;

  function handleMouseHover() {
    setLinkName(navLinkName);
  }

  return (
    <li><a className="navbar-link" href={navLinkName} onMouseEnter={handleMouseHover}> {navLinkName} </a></li>
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

  function handleLinkColorChange(linkName) {
    const navLinks = document.getElementsByClassName('navbar-link');

    //for loop through links
    //if node.innertext !== linkname:
      //set color text to grey
  }

  useEffect(() => {
    
  }, []);

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
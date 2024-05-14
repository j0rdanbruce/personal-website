import React, { useState } from "react";
import './About.css';

import useWindowDimensions from '../../HelperFunctions';
import { tab } from "@testing-library/user-event/dist/tab";

const Information = () => {
  const informationData = new Map();
  informationData.set("Extracurriculars", {"description": "volutneer code instructor.."});
  informationData.set("School", {"description": "I go to NJIT."});
  informationData.set("Hobbies", {"description": "I swim."});

  const infoDataEntries = [...informationData.keys()].map((infoKey) => {
    return (
      <li><button value={infoKey} onClick={(event) => handleButtonClick(event)}>{infoKey}</button></li>
    );
  });

  const [currentTab, setCurrentTab] = useState(informationData.get("Hobbies"));

  function handleButtonClick (event) {
    const tabName = event.target.value;

    setCurrentTab(informationData.get(tabName));
  }

  return (
    <div className="info-container">
      <ul className="link-nav-container">
        {infoDataEntries}
      </ul>
      <div className="information-container">
        <p>{currentTab.description}</p>
      </div>
    </div>
  );
}

const About = () => {
  const { height, width} = useWindowDimensions();
  const aboutMeStyle = {
    position: 'relative',
    height: height,
    width: width,
    backgroundColor: 'rgb(35,41,68)'
  }

  return(
    <div className="about-container" style={aboutMeStyle}>
      <div className="about-title">
        <p className="about-subtitle"> <span style={{color: 'rgb(0,122,255)'}}>/ </span>MY LIFE</p>
        <h2 className="about-header">About Me</h2>
      </div>
      <Information />
    </div>
  );
}

export default About;
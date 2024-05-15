import React, { useState } from "react";
import './About.css';

import useWindowDimensions from '../../HelperFunctions';

//image imports go here
import highlander from "../../Images/about_images/highlander.png";
import scary_movie from "../../Images/about_images/scary_movie.png";
import swimming from "../../Images/about_images/swimming.png";
import teaching from "../../Images/about_images/teaching.png";
import videogames from "../../Images/about_images/videogames.png";

const Information = () => {
  const informationData = new Map();
  informationData.set("Extracurriculars", [
    {description: "volutneer code instructor..",
     image: teaching
    }
  ]);
  informationData.set("School", [
    {description: "I go to NJIT.",
     image: highlander
    }
  ]);
  informationData.set("Hobbies", [
    {description: "I swim.",
     image: swimming
    },
    {description: "I like to play video games.",
     image: videogames
    },
    {description: "I am an avid movie watcher, especially scary movies. My favorite horror movie is an Alien movie!",
     image: scary_movie
    }
  ]);

  const [currentTab, setCurrentTab] = useState(informationData.get("Hobbies"));

  const infoDataEntries = [...informationData.keys()].map((infoKey) => {
    return (
      <li><button value={infoKey} onClick={(event) => handleButtonClick(event)}>{infoKey}</button></li>
    );
  });

  const infoImageStyle = {
    width: '10%',
    height: 'auto'
  }
  const currentInfoData = currentTab.map((info) => {
    return(
      <table className="table-info-container">
        <tr><p className="table-description">{info.description}</p></tr>
        <tr><div className="table-image-container"><img src={info.image} alt="" /></div></tr>
      </table>
    );
  });

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
        {currentInfoData}
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
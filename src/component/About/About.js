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
    {description: "In my spare time outside of school, I am a volunteer code instructor working with the 'Code Club' organization.",
     image: teaching
    }
  ]);
  informationData.set("School", [
    {description: "I am a Computer Science major at New Jersey Institute of Technology with a focus in web development, which is the career path that I want to pursue professionally in the future.",
     image: highlander
    }
  ]);
  informationData.set("Hobbies", [
    {description: "I like to do long distance swimming and I one of my future goals is to compete in a open-water swimming marathon.",
     image: swimming
    },
    {description: "I have been playing video games since I was a child. My first console was the Nintendo Gamecube and my favorite game is God of War.",
     image: videogames
    },
    {description: "I am an avid movie watcher, especially scary movies. My favorite horror movie is any from the Alien franchise!",
     image: scary_movie
    }
  ]);

  const [currentTab, setCurrentTab] = useState(informationData.get("Hobbies"));

  const infoDataEntries = [...informationData.keys()].map((infoKey) => {
    return (
      <li><button className="info-tab-btn" value={infoKey} onClick={(event) => handleButtonClick(event)}>{infoKey}</button></li>
    );
  });

  const currentInfoData = currentTab.map((info, index) => {
    const infoDataStyle = {
      borderLeft: index > 0 && index < (currentTab.length -1)  ? 'solid white 1px' : 'none',
      borderRight: index > 0 && index < (currentTab.length -1)  ? 'solid white 1px' : 'none'
    }

    return(
      <table className="table-info-container" style={infoDataStyle}>
        <tr className="tr-description"><p>{info.description}</p></tr>
        <tr className="tr-image"><img src={info.image} alt="" /></tr>
      </table>
    );
  });

  function handleButtonClick (event) {
    const tabName = event.target;
    const infoContainer = document.getElementsByClassName("information-container")[0];

    setCurrentTab(informationData.get(tabName.value));
    infoContainer.style.animation = 'fade-in 0.7s normal';
    setTimeout(() => {
      infoContainer.style.animation = 'none';
    }, 700);
  }

  return (
    <div className="info-container">
      <ul className="link-nav-container">
        {infoDataEntries}
      </ul>
      <div className="information-container" id="information-container">
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
import React from "react";
import "./Home.css"

import Button from "react-bootstrap/Button";
import useWindowDimensions from '../../HelperFunctions';
import headshot from "../../Images/headshot.jpg"

//Font Awesom imports go here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faSquareInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

//helper functions go here
function scrollToElement(element) {
  element.scrollIntoView();
}

const IntroductionInfo = ({props}) => {
    const { title } = props;

  return (
    <div className="Home intro-container">
      <h1 className="intro-title">{title}</h1>
      <SocialMediaBar />
    </div>
  );
}

const SocialMediaBar = () => {

  const socialMediaLinks = [
    {name: "LinkedIn", link: "https://www.linkedin.com/in/jordan-bruce-739160254/", icon: <FontAwesomeIcon className="media-icon" icon={faLinkedin} />},
    {name: "GitHub", link: "https://github.com/j0rdanbruce", icon: <FontAwesomeIcon className="media-icon" icon={faSquareGithub} />},
    {name: "Instagram", link: "https://www.instagram.com/jbruce_2015/", icon: <FontAwesomeIcon className="media-icon" icon={faSquareInstagram} />},
    {name: "Facebook", link: "https://www.facebook.com/jordan.bruce.5473", icon: <FontAwesomeIcon className="media-icon" icon={faSquareFacebook} />}
  ]
  const mediaLinksMap = socialMediaLinks.map((media) => {
    return(
      <li><a className={media.name} href={media.link}>{media.icon}</a></li>
    );
  });

  return(
    <ul className="social-media-container">
      {mediaLinksMap}
    </ul>
  );
}

const Headshot = () => {

  return (
    <div className="portrait">
      <img src={headshot} alt="" />
    </div>
  );
}

const QuickInfo = ({props}) => {
  const { title, description, linkName, linkRef, pageRef } = props;

  function handleBtnClick() {
    const element = document.getElementsByClassName(pageRef)[0];

    scrollToElement(element);
  }

  return (
    <div className="quick-info">
      <h5 className="quick-info-title">{title}</h5>
      <p className="quick-info-description">{description}</p>
      <a className="quick-info-link" href={linkRef} onClick={handleBtnClick}>{linkName}<span className="arrow-link">&#8594;</span></a>
    </div>
  );
}

const NextPageButton = () => {

  function handleNextPageBtnClick() {
    const element = document.getElementsByClassName("skills-subtitle")[0];

    scrollToElement(element);
  }

  return (
    <Button className="circle-btn" onClick={handleNextPageBtnClick}>
      <p className="down-arrow">&#8595;</p>
    </Button>
  );
}

const Home = () => {
  const { height, width } = useWindowDimensions();
  const style = {
    zIndex: 1,
    backgroundColor: 'rgb(12,15,26)',
    height: height,
    width: width,
    marginBottom: 0
  }
  const myInfo = [
    { title: "ABOUT ME",
      description: "I am a computer science student with a passion for software development and a drive for self-improvement.",
      linkName: "LEARN MORE",
      linkRef: "#",
      pageRef: "About"
    },
    { title: "MY WORK",
      description: "Through my college coursework and non-academic courses online, I have gained experience in a variety of technology stacks.",
      linkName: "BROWSE PORTFOLIO",
      linkRef: "#",
      pageRef: "Portfolio"
    }
  ];
  const myInfoMap = myInfo.map((info) => {
    return (
      <tr>
        <QuickInfo props={info} />
      </tr>
    );
  });

  const introData = {
    title: "Hello! I'm Jordan, a Software Developer.",
    description: "\"Perseverance is not a long race; it is many short races one after the other.\"\n-Walter Elliot"
  }

  return (
    <div style={style}>
      <Headshot />
      <IntroductionInfo props={introData} />
      <table className="quick-info-table">
        {myInfoMap}
      </table>
      <NextPageButton />
    </div>
  );
}

export default Home;
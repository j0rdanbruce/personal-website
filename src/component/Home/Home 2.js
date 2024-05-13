import React from "react";
import "./Home.css"

import Button from "react-bootstrap/Button";

import useWindowDimensions from '../../HelperFunctions'
import headshot from "../../Images/headshot.jpg"

const IntroductionInfo = ({props}) => {
    const { title, description } = props;

  return (
    <div className="intro-container">
      <h1 className="intro-title">{title}</h1>
      <p className="intro-description">{description}</p>
    </div>
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
  const { title, description, linkName, linkRef } = props;

  return (
    <div className="quick-info">
      <h5 className="quick-info-title">{title}</h5>
      <p className="quick-info-description">{description}</p>
      <a className="quick-info-link" href={linkRef}>{linkName}<span className="arrow-link">&#8594;</span></a>
    </div>
  );
}

const NextPageButton = () => {

  return (
    <Button className="circle-btn">
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
      description: "I am a computer science student with a passion for web development and a drive for self-improvement.",
      linkName: "LEARN MORE",
      linkRef: "#"
    },
    { title: "MY WORK",
      description: "Through my college coursework and non-academic courses online, I have gained experience in a variety of technology stacks.",
      linkName: "BROWSE PORTFOLIO",
      linkRef: "#"
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
    description: "\"It was always me versus the world until I found it's me versus me.\"\n-Kendrick Lamar"
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
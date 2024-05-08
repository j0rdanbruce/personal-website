import React from "react";
import "./Home.css"

import useWindowDimensions from '../../HelperFunctions'

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

  return (
    <div style={style}>
      <table className="quick-info-table">
        {myInfoMap}
      </table>
      
    </div>
  );
}

export default Home;
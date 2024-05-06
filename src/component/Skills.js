import React from "react";

import useWindowDimensions from '../HelperFunctions'

const Skills = () => {
  const { height, width } = useWindowDimensions();

  const style = {
    backgroundColor: 'rgb(35,41,68)',
    height: height,
    width: width,
    marginTop: '-22px'
  }

  return (
    <div
      style={style}
    >
      <h1>MY SKILLS</h1>
    </div>
  );
}

export default Skills;
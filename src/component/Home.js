import React from "react";

import useWindowDimensions from '../HelperFunctions'

const Home = () => {
  const { height, width } = useWindowDimensions();

  const style = {
    zIndex: 1,
    backgroundColor: 'rgb(12,15,26)',
    height: height,
    width: width,
    marginBottom: 0
  }

  return (
    <div
      style={style}
    >
    </div>
  );
}

export default Home;
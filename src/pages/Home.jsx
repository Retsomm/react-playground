import React from "react";
import ExpandingCards from "../component/ExpandingCards";
import ProgressSteps from "../component/ProgressSteps";
import BlurryLoading from "../component/BlurryLoading";
const Home = () => {
  return (
    <>
      <BlurryLoading />
      <ExpandingCards />
      <ProgressSteps />
    </>
  );
};

export default Home;

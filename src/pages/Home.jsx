import React from "react";
import ExpandingCards from "../component/ExpandingCards";
import ProgressSteps from "../component/ProgressSteps";
import BlurryLoading from "../component/BlurryLoading";
import DragNDrop from "../component/DragNDrop";
import LiveUserFilter from "../component/LiveUserFilter";
import DrawingBoard from "../component/DrawingBoard";
import NoteApp from "../component/NoteApp";
import Pokedex from "../component/Pokedex";
const Home = () => {
  return (
    <>
      <BlurryLoading />
      <ExpandingCards />
      <ProgressSteps />
      <DragNDrop />
      <LiveUserFilter />
      <DrawingBoard />
      <NoteApp />
      <Pokedex />
    </>
  );
};

export default Home;

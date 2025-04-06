import React from "react";
import AboutCodePen from "./AboutCodePen";
import AboutCodePenCard from "./AboutCodePenCard";
import ExploreEditor from "./ExploreEditor";
import FrameWorkGrid from "./FrameWorkGrid";
import Sponsor2 from "../SPONSOR/Sponsor2";
import TeamStart from "./TeamStart";
import GridPen from "./GridPen";

function ContentHome() {
  return (
    <>
      <main className=" overflow-hidden relative">
        <AboutCodePen></AboutCodePen>
        <AboutCodePenCard></AboutCodePenCard>
        <GridPen></GridPen>
        
        <ExploreEditor></ExploreEditor>
        <FrameWorkGrid></FrameWorkGrid>
        <Sponsor2></Sponsor2>
        <TeamStart></TeamStart>
      </main>
    </>
  );
}

export default ContentHome;

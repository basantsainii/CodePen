import React, { useState } from "react";
import ExploreEditorMap from "./ExploreEditorMap";

function ExploreEditor() {
  return (
    <>
      <div className="bg-[#19191E] mt-5">
        <h1 className="text-2xl text-white text-center">
          A front-end environment made for testing and sharing
        </h1>
        <p className="text-center text-blue-500">
          <a href="/">Explore the Editor</a>
        </p>
        <ExploreEditorMap></ExploreEditorMap>
      </div>
    </>
  );
}

export default ExploreEditor;

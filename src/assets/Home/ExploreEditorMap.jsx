import React, { useState } from "react";
import ExploreEditor from "./ExploreEditor.json";

function ExploreEditorMap() {
  const ExploreEditorData = ExploreEditor;

  const NullPara = ExploreEditorData.map((e) => {
    return { heading: e.heading, para: "", img: "" };
  });

  const selectedPara = NullPara.map((obj) => {
    if (NullPara.indexOf(obj) == 1) {
      return {
        caret: "down",
        heading: obj.heading,
        para: ExploreEditorData[1].para,
        img: ExploreEditorData[1].img,
      };
    }
    return obj;
  });

  const [usedPara, setUsedPara] = useState(selectedPara);

  const OnClickPara = (id) => {
    let i = 0;
    const UpdatedPara = NullPara.map((obj) => {
      if (id === i) {
        i++;
        return {
          caret: "down",
          heading: obj.heading,
          para: ExploreEditorData[id].para,
          img: ExploreEditorData[id].img,
        };
      }
      i++;
      return obj;
    });

    setUsedPara(UpdatedPara);
    // console.log(UpdatedPara);
  }; 


  return (
    <>
      <div className="w-full py-6 lg:flex">
        <div className="lg:w-1/3 p-4 ">
          {/* headings */}
          {usedPara.map((obj, id) => {
            return (
              <div
                key={id}
                onClick={() => {
                  OnClickPara(id);
                }}
                className="text-white hover:cursor-pointer"
              >
                <h1 className="">
                  <i
                    className={`fa-solid fa-caret-${
                      obj.caret ? obj.caret : "right"
                    }`}
                  ></i>{" "}
                  {obj.heading}
                </h1>
                <p className="my-6 text-slate-300">{obj.para}</p>
              </div>
            );
          })}
        </div>

        {/* images */}
        <div className=" lg:w-2/3 px-6">
          {usedPara.map((e,id) => {
            return (
              <div key={id}>
                <img src={`./src/assets/Home/ExploreEditoreImg/${e.img}`} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ExploreEditorMap;

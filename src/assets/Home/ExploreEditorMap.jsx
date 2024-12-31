import React, { useState } from "react";
import ExploreEditor from "./ExploreEditor.json";

function ExploreEditorMap() {
  const ExploreEditorData = ExploreEditor;

  const NullPara = ExploreEditorData.map((e) => {
    return { heading: e.heading, para: "", img: "" };
  });
console.log("NullPara is ",NullPara)

  const selectedPara = [...NullPara]
  selectedPara[1]={
    caret: "down",
    heading: ExploreEditorData[1].heading,
    para: ExploreEditorData[1].para,
    img: ExploreEditorData[1].img,
  }
  console.log("selectedPara is ",selectedPara)


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
console.log("usedPara is ",usedPara)

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
                className="text-white hover:cursor-pointer pt-3"
              >
                <h1 className="">
                  <i
                    className={`fa-solid fa-caret-${
                      obj.caret ? obj.caret : "right"
                    }`}
                  ></i>{" "}
                  {obj.heading}
                </h1>
                <p className="my-6 text-sm text-slate-300">{obj.para}</p>
              </div>
            );
          })}
        </div>

        {/* images */}
        <div className=" lg:w-2/3  relative overflow-hidden">
          {usedPara.map((e,id) => {
            return (                      
              <div key={id} className={`${e.img ? "top-0 opacity-100": "top-full opacity-0"} px-6 right-0 absolute transition-all ease-linear duration-500`}>
                                      {/* can't use ExploreEditorData[id].img  because map fn will not work it not using mapped array  $$$ also position of above div must be absolute so that all images must be sit on one-another   */}
                <img src={`./src/assets/Home/ExploreEditorImg/${ExploreEditorData[id].img}`} alt="" />
                                                              {/* cant use e.img here if using desired transition, transition will not work properly using e.img b/c all other object of mapped array has empty image path */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ExploreEditorMap;

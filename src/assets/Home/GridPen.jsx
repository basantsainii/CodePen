import React, { useEffect, useState } from "react";
import Pens from "./Pens.json";

function GridPen() {
  const [onMouse, setOnMouse] = useState();
  const [randomPenObjects, setRandomPenObjects] = useState([]); // State to store shuffled objects

  const PenGrid = Pens;

  // Use useEffect to shuffle the array on mount or when PenGrid changes
  useEffect(() => {
    const shuffled = [...PenGrid].sort(() => Math.random() - 0.5);
    setRandomPenObjects(shuffled.slice(0, 5)); // Set the first 5 shuffled elements
  }, [PenGrid]); // Only re-run this effect when PenGrid changes

  const ShowDetail = (id) => {
    if (id === PenGrid.indexOf(PenGrid[id])) {
      setOnMouse(id);
    }
  };
  const HideDetail = () => {
    setOnMouse();
  };

  return (
    <>
      <div className="p-5">
        <div className=" w-full md:grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-4 text-white">
          {/* box-1 */}
          <div className=" md:h-72 content-center p-3">
            <h1 className="text-2xl font-bold ">
              Find inspiration from 1.8 million+ front-end designers and
              developers.
            </h1>
            <p className="text-sm text-gray-400">
              Browse and share work from world-class designers and developers in
              the front-end community.
            </p>
          </div>
          {/* Pen Cards */}
          {randomPenObjects.map((e, id) => {
            return (
              <div
                key={id}
                onMouseEnter={() => ShowDetail(id)}
                onMouseLeave={() => HideDetail(id)}
                className="  relative h-[90vh] md:h-72 content-center transition ease-linear duration-300 bg-none"
              >
                <div className="w-full h-full absolute left-0 top-2 z-10">
                  <div className="w-[95%] relative bg-violet-900 bg-right h-[70%] md:h-[60%] m-auto rounded-lg">
                    {/* to maximize */}
                    <a
                      href=""
                      className={` ${
                        onMouse == id
                          ? "opacity-100"
                          : "opacity-0 translate-x-1"
                      } px-2 py-1 absolute top-4 right-5 z-30 hover:scale-110 transition-all duration-200 ease-linear bg-slate-600 rounded-md`}
                    >
                      <i className="fa-solid fa-maximize text-slate-400 text-lg"></i>
                    </a>
                  </div>

                  {/* profile and Title*/}
                  <div className="flex pl-5 mt-2 gap-1 justify-start">
                    <div className="w-11 h-11 rounded-md overflow-hidden back">
                      <img
                        src="src/assets/Home/GridPenImages/image.png"
                        className="w-11"
                        alt=""
                      />
                    </div>
                    {/* Title Name*/}
                    <div className="text-sm">
                      <h1>{e.title}</h1>
                      <p className="text-gray-400 text-[0.8rem]">{e.name}</p>
                    </div>
                  </div>
                  {/* like comment view */}
                  <div
                    className={`${
                      onMouse == id
                        ? "opacity-100 translate-y-0 z-0"
                        : "opacity-0 -translate-y-5 -z-10"
                    } absolute bottom-16 md:bottom-6 left-0 transition-all ease-linear duration-100 px-5 mt-1 text-center flex justify-start gap-x-3`}
                  >
                    <div className=" hover:cursor-pointer bg-[#2E3343] p-[5px] text-[0.75rem] rounded-sm">
                      <i className="fa-solid fa-heart"></i> {e.likes}
                    </div>
                    <div className=" hover:cursor-pointer bg-[#2E3343] p-[5px] text-[0.75rem] rounded-sm">
                      <i className="fa-regular fa-comment"></i> {e.comment}
                    </div>
                    <div className=" hover:cursor-pointer bg-[#2E3343] p-[5px] text-[0.75rem] rounded-sm">
                      <i className="fa-regular fa-eye"></i> {e.views}
                    </div>
                  </div>
                </div>
                {/* background shadow div */}
                <div
                  className={`${
                    onMouse == id
                      ? "w-[100%] scale-y-[1.2] md:scale-y-[1.3]"
                      : "w-[90%] scale-y-[1]"
                  } h-[76%] rounded-lg absolute top-10 md:top-8 right-0 bg-[#1E1F26] transition-all ease-linear duration-200 z-0`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GridPen;

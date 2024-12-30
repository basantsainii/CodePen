import React, { useState } from "react";

function GridPen() {
const [onMouse, setOnMouse] = useState()

const PenGrid = [{h1:"The Text Only CSS Loader", p:"Stas MelnikoV"},{},{},{},{}]


  const ShowDetail =(id)=>{
    if(id===PenGrid.indexOf(PenGrid[id])){
      setOnMouse(id);
    }
    
  }
  const HideDetail = (id)=>{
    setOnMouse();
  }

  return (
    <>
      <div className="p-5">
        <div className=" w-full md:grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-4 text-white">
          {/* box-1 */}
          <div className=" h-72 content-center p-3">
            <h1 className="text-2xl font-bold ">
              Find inspiration from 1.8 million+ front-end designers and
              developers.
            </h1>
            <p className="text-sm text-gray-400">
              Browse and share work from world-class designers and developers in
              the front-end community.
            </p>
          </div>
          {/* boxes */}
          { PenGrid.map((e, id)=>{
            return(
              
          <div key={id} onMouseEnter={()=>ShowDetail(id)} onMouseLeave={()=>HideDetail(id)} className=" relative h-72 content-center transition ease-linear duration-300 bg-none">
          <div className="w-full h-full absolute left-0 top-2 z-10">
          <div className="w-[90%] relative bg-gray-800 bg-right h-[60%] m-auto rounded-lg">

          <a className={` ${(onMouse==id) ? "opacity-100" : "opacity-0 translate-x-1"} px-2 py-1 absolute top-4 right-5 z-30 hover:scale-110 transition-all duration-200 ease-linear bg-slate-600 rounded-md`}><i class="fa-solid fa-maximize text-slate-400 text-lg"></i></a>

          </div>
            <div className="flex pl-5 mt-2 gap-1 justify-start">
              <div className="w-11 h-11 rounded-md overflow-hidden back">
                <img
                  src="src/assets/Home/GridPenImages/image.png"
                  className="w-11"
                  alt=""
                />
              </div>
              <div className="text-sm">
                <h1>{e.h1}</h1>
                <p className="text-gray-400 text-[0.8rem]">{e.p}</p>
              </div>
            </div>
            <div className={`${(onMouse==id) ? "opacity-100 translate-y-0 z-0" : "opacity-0 -translate-y-5 -z-10"} absolute bottom-6 left-0 transition-all ease-linear duration-100 px-5 mt-1 text-center flex justify-start gap-x-3`}>
              <div className=" hover:cursor-pointer bg-[#2E3343] p-[5px] text-[0.75rem] rounded-sm">
              <i class="fa-solid fa-heart"></i> 30
              </div>
              <div className=" hover:cursor-pointer bg-[#2E3343] p-[5px] text-[0.75rem] rounded-sm">
              <i class="fa-regular fa-comment"></i> 2
              </div>
              <div className=" hover:cursor-pointer bg-[#2E3343] p-[5px] text-[0.75rem] rounded-sm">
              <i class="fa-regular fa-eye"></i> 280
              </div>
            </div>
          </div>
          <div className={`${(onMouse==id) ? "w-[100%] scale-y-[1.45]" : "w-[85%] scale-y-[1]"} h-[70%] rounded-lg absolute top-10 right-0 bg-[#1E1F26] transition-all ease-linear duration-200 z-0`}>
          </div>
          </div>
              
            )
          })}
          

        </div>
      </div>
    </>
  );
}

export default GridPen;

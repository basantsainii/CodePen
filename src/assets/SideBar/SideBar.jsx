import Button from "../Header/Button.jsx"
import image from "./image.png"
import { useState } from "react";
function SideBar({HeaderWidth}) {
  const [toggleAngle, setToggleAngle] = useState("fa-angle-left");
  const [lineWidth1, setLineWidth1] = useState("w-5/6");
  const [lineWidth2, setLineWidth2] = useState("w-2/3");
  const [lineWidth3, setLineWidth3] = useState("w-5/6");
  const [toggle, setToggle] = useState(true);
  const [showHide, setShowHide] = useState("hidden");
  const [sideBarPos, setSideBarPos] = useState("relative top-0 left-0");

  const SideBarMenu = () => {
    if (toggle == true) {
      setToggleAngle("fa-angle-right");
      setLineWidth1("w-1/2");
      setLineWidth2("w-2/3");
      setLineWidth3("w-1/2");
      setShowHide("block");
      HeaderWidth("w-88")
      setSideBarPos("absolute h-full top-0 -left-52 ")
      setToggle(false);

    } else {
      setToggleAngle("fa-angle-left");
      setLineWidth1("w-5/6");
      setLineWidth2("w-2/3");
      setLineWidth3("w-5/6");
      setShowHide("hidden");
      HeaderWidth("w-full")
      setSideBarPos("relative top-0 left-0")
      setToggle(true);
    }
  };

  const ToShowHum =()=>{
    if(toggle == true){
      setShowHide("block");
    }
    
  }
  const ToHideHum =()=>{
    if(toggle == false){
      setShowHide("block");
    }else{
      setShowHide("hidden");
    }
  }

  return (
    <>
      <header onMouseEnter={ToShowHum} onMouseLeave={ToHideHum} className={`w-[210px] bg-[#1E1F26] text-white hidden ease-linear transition-all duration-300 md:block ${sideBarPos} z-50`}>
        <div>         
          <img className="h-[2.2rem] mt-4 mx-auto" src={image} alt=" codePen icon" /> 
        </div>
        <nav>
        <div className=" text-center">
          <p className="text-[0.7rem] text-slate-300 mt-6 mb-3">TRY &nbsp;OUR &nbsp;ONLINE &nbsp;EDITOR</p>
          <a href="/" className="sideBar_start_coding "><Button className=" " name="Start Coding"/></a>
        </div>
          <ul className="leading-9 py-4 ">
            <li className=" pt-1 px-5 hover:bg-slate-800">Search Pens</li>
            <li className=" pt-1 px-5 hover:bg-slate-800">Challenges</li>
            <li className=" pt-1 px-5 hover:bg-slate-800">Spark</li>
          </ul>
        </nav>
        <div className="p-2 px-5 hover:bg-slate-800">CopePen <Button name="PRO" className="px-1 text-black text-[0.7rem]  bg-yellow-400"></Button></div>
        <div className="p-2 mt-5 px-5">
        <a href="/">
          <img src="https://srv.carbonads.net/static/30242/4b723271609d12c16fec10ddea2ce78e9bba0517" alt="" width="90%"/>
          <p className=" pt-2 text-[0.715rem] text-slate-300 leading-[1.12rem]">Build your website for just $3.88/mth. More value and performance with NameCheap.</p>
          </a>
          <p className="text-[0.6rem] text-slate-400  pt-2"><a href="/">(ads via Carbon)</a></p>
        </div>
        <div className={`${toggle ? "left-[180px] ": "left-0"} fixed top-12 ease-linear transition-all  duration-300  h-6 w-6`}>
        <ul onClick={()=>{SideBarMenu();}} className={`${showHide} p-1  w-full h-[100%] bg-slate-500 rounded-e-md `} >
            <li className={`${lineWidth1} mt-[0px] border-white border-[1px]`}></li>
            <li className={`${lineWidth2} mt-[4px] border-white border`}></li>
            <li className={`${lineWidth3}  mt-[4px] border-white border`}></li>
            <li className=" absolute top-[0px] text-white text-md right-0"><i className={`fa-solid ${toggleAngle}`}></i></li>
          </ul>
        </div>
      </header>
    </>
  )
}



export default SideBar

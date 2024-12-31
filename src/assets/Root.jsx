import React, { useState } from "react";
import SideBar from "./SideBar/SideBar";
import Home from "./Home/Home";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Root() {

const [headerNav, setHeaderNav] = useState("w-88");
// console.log(headerNav);
const HeaderWidth =(width)=>{
  setHeaderNav(width)
}
  return (
    <>
      <div className={`${headerNav} min-h-screen flex relative left-0 top-0 bg-[#131417]`}>
        <SideBar HeaderWidth={HeaderWidth} />
        <div className={`w-full md:${headerNav}  `}>
          <Header></Header>
          <Home>
            <Outlet />
          </Home>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default Root;

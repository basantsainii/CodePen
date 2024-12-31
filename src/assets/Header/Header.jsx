import { useState } from "react";
import Button from "./Button";
import Search from "./Search";
import MenuHumBurger from "./MenuHumBurger.jsx";
import HeaderNav from "./HeaderNav.jsx";

function Header() {
  const [toggleAngle, setToggleAngle] = useState("fa-angle-up");
  const [lineWidth1, setLineWidth1] = useState("w-1/2");
  const [lineWidth2, setLineWidth2] = useState("w-1/3");
  const [toggle, setToggle] = useState(true);
const [showNav, setShowNav] = useState(true)

  const SideBarMenu = () => {
    if (toggle == true) {
      setToggleAngle("fa-angle-down");
      setLineWidth1("w-1/3");
      setLineWidth2("w-1/2");
      setToggle(false);
      setShowNav(false)
    } else {
      setToggleAngle("fa-angle-up");
      setLineWidth1("w-1/2");
      setLineWidth2("w-1/3");
      setToggle(true);
      setShowNav(true)
    }
  };

  return (
    <>
      <div className="py-1 text-sm md:py-4 bg-black flex justify-between align-middle flex-nowrap  p-2 relative">
        <div className="px-2 flex gap-3">

          {/* CodePen icon */}
          <div  className="md:hidden w-9 pt-1">
            <a href="/">
              <svg
                viewBox="0 0 100 100"
                className=" fill-white"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4zm-8.6 0v20L27.1 44.8 12 34.8zM8.6 42.8 19.3 50 8.6 57.2zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50zm4.3 27.5v-20l18.6-12.5 15 10.1zm37.1-30.5L80.7 50l10.8-7.2z"></path>
              </svg>
            </a>
          </div>

          {/* HumBerger */}
          <MenuHumBurger
            toggleAngle={toggleAngle}
            lineWidth1={lineWidth1}
            lineWidth2={lineWidth2}
            SideBarMenu={SideBarMenu}
          />
          {/* humBerger menu nav bar onclick trigger */}
          <div onClick={SideBarMenu} className={`${showNav ? "hidden" : ""} w-full h-full opacity-0 z-50 fixed top-0 md:hidden left-0 bg-gray-600 `}></div>
          <HeaderNav  showNav={showNav}></HeaderNav>
          {/* search for CodePen */}
          <Search />
        </div>
        {/* sign up and login button */}
        <div className="flex flex-nowrap">
          <a href="/SignUp">
            <Button
            name="Sign Up "
            className="bg-[#46CF73] h-full w-16 md:w-[5.5rem] hover:bg-green-600 hover:text-white rounded-[0.285rem]"
          />
          </a>
          <a href="/LogIn">
          <Button
            name="Log In"
            className="bg-[#262830] h-full w-16 md:w-[5rem] hover:bg-slate-600 rounded-[0.285rem] text-white"
          />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;

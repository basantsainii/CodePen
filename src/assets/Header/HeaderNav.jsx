import React from 'react'
import Button from './Button'

function HeaderNav({showNav}) {
  return (
    <>
      <nav className={` ${showNav? "z-40 opacity-0 scale-95  skew-x-3" : " opacity-100 z-50"} absolute left-0 top-full transition-all ease-linear duration-300 text-white md:hidden shadow-lg shadow-black bg-[#262830] w-72   `}  >
      <div className="">
          <p className="text-[0.7rem] px-5 text-slate-300 mt-6 mb-3">TRY &nbsp;OUR &nbsp;ONLINE &nbsp;EDITOR</p>
          <a href="/" className="sideBar_start_coding w-full"><Button className=" " name="Start Coding"/></a>
        </div>
          <ul className="leading-9 py-2 ">
            <li className=" px-5 hover:bg-slate-800">Search Pens</li>
            <li className=" px-5 hover:bg-slate-800">Challenges</li>
            <li className=" px-5 hover:bg-slate-800">Spark</li>
          </ul>
        <div className="my-4 px-5 py-2 hover:bg-slate-800">CopePen <Button name="PRO" className="px-1 text-black text-[0.7rem]  bg-yellow-400"></Button></div>
      </nav>
    </>
  )
}

export default HeaderNav

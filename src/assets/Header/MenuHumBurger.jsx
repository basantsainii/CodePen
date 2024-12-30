import React from 'react'

function MenuHumBurger({handleOnFocus,handleBlur,SideBarMenu,showHide,lineWidth1,lineWidth2,toggleAngle}) {
  const abc =()=>showHide ? showHide : "hidden";
  return (
    <>
      <ul onClick={()=>{SideBarMenu();}} className={`md:${abc()} p-1 w-9 md:w-10  bg-[#5A5F73] rounded-sm relative`} >
            <li className={`${lineWidth1} mt-[4px] border-white border-[1px]`}></li>
            <li className={`${lineWidth2} mt-[6px] border-white border`}></li>
            <li className={`w-5/6  mt-[6px] border-white border`}></li>
            <li className=" absolute top-1 md:top-1 text-white text-sm right-1">
              <i className={`fa-solid ${toggleAngle} `}></i></li>
          </ul>
    </>
  )
}

export default MenuHumBurger


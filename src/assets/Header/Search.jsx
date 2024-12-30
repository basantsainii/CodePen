import { HiMagnifyingGlass } from "react-icons/hi2";

function Search() {
  return (
    <>
    <div className="flex justify-between bg-[#262830] py-1 md:py-[0.75rem] px-2 w-max-[40rem] rounded-md"><i className="fa-solid fa-magnifying-glass mt-2 md:mt-1 text-gray-400"></i>&nbsp; <input type="search" className=" text-white content-center w-16 sm:w-48 md:w-72 outline-none text-[0.875rem] md:text-[1rem] bg-inherit" placeholder="Search CodePen..."/>
    </div>
      
    </> 
  )
}

export default Search

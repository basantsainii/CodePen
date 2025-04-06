import {createContext } from "react";
import Pens from "../Home/Pens.json";
export const SearchContext = createContext(Pens);


// also can be used as , without importing createContext
// export const SearchContext = React.createContext(Pens);
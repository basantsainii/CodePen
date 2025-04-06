import { useContext, useState, children } from "react"
import { SearchContext } from "./SearchContext"

function SearchContextProvider() {

    var {Pens} = useContext(SearchContext);


    const [SearchedPens ,setSearchedPens] = useState(Pens);

    const FilterPens = (keywords)=>{
        const Searched_obj = Pens.filter((Obj)=>{
            let keys = Object.keys(Obj)
            console.log(keys)
            console.log(Obj)
            for (let i = 0; i < keys.length; i++) {
                let Key_name = keys[i]
                // console.log(Key_name)
                if (String(Obj[Key_name]).toLocaleLowerCase().includes(keywords.toLowerCase())) {
                    return Obj;
                }
            }
        });
        setSearchedPens(Searched_obj);
    }

  return (
    <SearchContext.Provider value = {{SearchedPens, Pens, FilterPens}}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider

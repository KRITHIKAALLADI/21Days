import React, { createContext,useState } from 'react'

export const ThemeChanger=createContext();

const Themcolor = ({children}) => {
    const [data,setData]=useState();
  return (
    <div>
        <ThemeChanger.Provider value={[data,setData]}>
            {children}
        </ThemeChanger.Provider>

    </div>
  )
}

export default Themcolor


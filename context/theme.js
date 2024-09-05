import { createContext, useState } from "react";

 export const theme = createContext('true')


  export default function ThemeComponent({children}){
    const [mode,setMode] = useState(JSON.parse(localStorage.getItem('mode')))
    return (
        <theme.Provider value={[mode,setMode]}>
        {children}
       </theme.Provider>
    )
  }

import { useEffect, useState } from "react";

 
 export default function useScreenSize() {
    const [screenSize,setWidth] = useState({width: window.innerWidth , height: window.innerHeight})

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWidth({width: window.innerWidth , height: window.innerHeight})
            return screenSize

          })
    },[])
    
   return screenSize
 }

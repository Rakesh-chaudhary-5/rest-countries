import { Outlet } from "react-router-dom"
import Header from "./components/header"
import "./App.css"
import ThemeComponent from "./context/theme"

   export default function App(){
      
 return(
  <ThemeComponent>
  <Header/>
  <Outlet/>
  </ThemeComponent>
  
 )
    }


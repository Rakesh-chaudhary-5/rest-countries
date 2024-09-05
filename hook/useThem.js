import { useContext } from "react"
import { theme } from "../context/theme"

export default function useThem() {
  return [mode,setMode] = useContext(theme)

}

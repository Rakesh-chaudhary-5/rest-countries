import Search_bar  from "./search_bar"
import CardList from "./cardList"
import Filter from "./filter"
import Country from "../countryData"
import { useEffect, useState } from "react"
import "../App.css"
import HomeShimmer from "./home-shimmer"
import useScreenSize from "../hook/useScreenSize"
import useThem from "../hook/useThem"
import useFilter from "../hook/useFilter"



   export default function Home(){

      const [data,setData] = useState([])
      const [fValue,fSetValue] = useState('')

      const screenSize = useScreenSize()
      const [themes] = useThem()

      useEffect(()=>{
         const country = Country.map((e)=>e)
         setData(country)
      },[])
      
       //--- custom hook ---//
      const filterData = useFilter(data,fValue)

     const [value,setValue] = useState('')

    //   Search by input
     const filterCountry = filterData.filter((e)=>{
      return e.name.common.toLowerCase().includes(value)
   }) 
   
    return(
    <>
     
     <section className={`search ${themes ? 'on': ''}`} >

      <div className="search-filter-container">
      <Search_bar inputValue={setValue}/>
      <Filter filterValue={fSetValue}/>
      </div>
     </section>

    {
      filterCountry == '' ? <HomeShimmer /> :
      <main className={`${themes ? 'on' : ''}`}>
         <h1 style={{textAlign: "center"}}>{screenSize.width} X {screenSize.height}</h1>
       <CardList countrys={filterCountry} />
      </main>
   }
     </>
        
    )
}


 
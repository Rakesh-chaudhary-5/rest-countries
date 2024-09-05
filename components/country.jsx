import Style from './country.module.css';
import Country from '../countryData'
import {useContext, useEffect, useState } from 'react';
import { Link, useLocation, useOutletContext, useParams } from 'react-router-dom';
import Shimmer from './country-shimmer';
import { theme } from '../context/theme';

export default function Country() {
  const params = useParams()
       const [data,setData] = useState(null)
       const nameData = params.country;
       const [err,setErr] = useState(false)
  
  const countryData = useLocation()
  const [mode] = useContext(theme)

   useEffect(()=>{

      fetch(`https://restcountries.com/v3.1/name/${nameData}?fullText=true`)
    .then((res)=>res.json())
    .then(([data]) => {
     
      setData({
        name: data.name.common,
        flag: data.flags.svg,
        nativeName: data.name.nativeName ? Object.values(data.name.nativeName)[0].official : 'N/A',
        population: data.population.toLocaleString('en-IN'),
        region: data.region,
        subregion: data.subregion || 'N/A',
        capital: data.capital || 'N/A',
        tld: data.tld,
        currency: data.currencies ? Object.values(data.currencies)[0].name : 'N/A',
        language: data.languages ? Object.values(data.languages).join(',') : 'N/A',
       borders:[]
      })
      if(!data.borders)
      {
        data.borders = []
      }
  
     data.borders.map((e)=>{
        fetch(`https://restcountries.com/v3.1/alpha/${e}`)
        .then(res=>res.json())
        .then(([data])=>setData((prv)=>({...prv, borders: [...prv.borders,data.name.common]})))
      })  

    }).catch(()=>{
      setErr(true)
    })
   },[nameData])

    if(err)
    {
     return <h1>Page not found, check the url</h1>
    }
    return data === null ? <Shimmer /> :(

      <main className={`${mode ? 'on' : ''}`}>
      <button className={Style.button} onClick={()=>history.back()}>Back</button>
      <div className={Style['country-container']}>
        <img className={Style.img} src={data.flag} alt="" />
        <div className={Style.text}>
          <h2 className={Style.h2}>{data.name}</h2>

          <div className={Style.info}>
            <div>
              <p><b>Native Name:</b> <span className={Style.nativeName}>{data.nativeName}</span></p>
              <p><b>Population:</b> <span className={Style.population}>{data.population}</span></p>
              <p><b>Region:</b> <span className={Style.region}>{data.region}</span></p>
              <p><b>Sub Region:</b> <span className={Style.subRegion}>{data.subregion}</span></p>
              <p><b>Capital:</b> <span className={Style.capital}>{data.capital}</span></p>
            </div>

            <div className={Style.info2}>
              <p><b>Top Level Domain:</b> <span className={Style.tld}>{data.tld}</span></p>
              <p><b>Currency:</b> <span className={Style.currency}>{data.currency}</span></p>
              <p><b>Languages:</b> <span className={Style.language}>{data.language}</span></p>
            </div>
          </div>
          <div className={Style['n-country']}>
              <p className={Style.borderCountry}><b>Border countries:</b></p>

            <div className={Style['n-btn']}>

           {data.borders != false ? data.borders.map((e,i)=>
            (
              <a className={Style.btn} href={e} key={i}>{e}</a>
            )) : <button className={Style.btn} >N/A</button>} 
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

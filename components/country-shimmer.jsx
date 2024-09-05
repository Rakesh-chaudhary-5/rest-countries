import Style from './countryShimmer.module.css';
import Country from '../countryData'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Country() {
  const nameData = new URLSearchParams(window.location.search).get('name');

 
      const [data,setData] = useState({})

   useEffect(()=>{
      fetch(`https://restcountries.com/v3.1/name/${'India'}?fullText=true`)
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
        borders: data.borders
      })
    })
   },[])

    return (
      <main>
      <button className={Style.button}>
        <Link className={Style.back} to='/'>Back</Link>
      </button>
      <div className={Style['country-container']}>
        <div className={Style.imgContainer}><img className={Style.img} src={data.flag} alt="" /></div>
        <div className={Style.text}>
          <h2 className={Style.h2}>South Georgia</h2>

          <div className={Style.info}>
            <div>
              <p><b>Native Name:</b> <span className={Style.nativeName}>asdfghfghj</span></p>
              <p><b>Population:</b> <span className={Style.population}>12345678</span></p>
              <p><b>Region:</b> <span className={Style.region}>123456</span></p>
              <p><b>Sub Region:</b> <span className={Style.subRegion}>12345677</span></p>
              <p><b>Capital:</b> <span className={Style.capital}>12345678</span></p>
            </div>

            <div className={Style.info2}>
              <p><b>Top Level Domain:</b> <span className={Style.tld}>123</span></p>
              <p><b>Currency:</b> <span className={Style.currency}>1234567</span></p>
              <p><b>Languages:</b> <span className={Style.language}>1234567892345678765432</span></p>
            </div>
          </div>
          <div className={Style['n-country']}>
              <p className={Style.borderCountry}><b>Border countries:</b></p>

            <div className={Style['n-btn']} >
           {data.borders ? data.borders.slice(0,3).map((e,i)=>
            (
              <a href={`/country?name=${data.name}`} className={Style.btn} key={i} >{e}</a>
            )) : <a href="" className={Style.btn} >N/A</a>}    
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

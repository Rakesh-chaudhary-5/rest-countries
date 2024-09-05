import Card from "./card"
 
export default function cardList({countrys}) {
    return (
        <div className="country-container"> {
      countrys.map((e)=>{
            return <Card name={e.name.common} 
                     population={e.population} 
                     region={e.region} 
                     capital={e.capital ? e.capital : 'N/A'}
                     flag={e.flags.svg} 
                     key={e.name.common}
                     data={e}
                     />
         })
        }
      </div>
      
    )
  
}

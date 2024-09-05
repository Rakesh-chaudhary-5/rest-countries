import { Link } from "react-router-dom";

  export default function card({name,population,region,capital,flag,data}) {
    return (
          <Link className="card" to={`/${name}`} state={data}>
            <img className="card-img" src={flag} alt="" />
            <div className="card-text">
              <h2>{name}</h2>
              <p><b>Population:</b>{population.toLocaleString('en-IN')}</p>
              <p><b>Region:</b>{region}</p>
              <p><b>Capital:</b>{capital}</p>
            </div>
            </Link>
        
    )
}
  


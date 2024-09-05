import './home-shimmer.css'
export default function homeShimmer() {
    const arr = Array.from({length:50})
  return (
    <main>
         <div className="country-container">

        {
            arr.map((e,i)=>{
               return <a className="card home-shimmer" key={i} href="/South Georgia"><div className='img'></div><div className="card-text"><h2>South Georgia</h2><p><b>Population:</b>30</p><p><b>Region:</b>Antarctic</p><p><b>Capital:</b>King Edward Point</p></div></a>
            })
        }

         </div>
    </main>
  )
}

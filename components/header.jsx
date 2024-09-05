import useThem from "../hook/useThem"

  export default function Header(){

    const [mode,setMode] = useThem()

    return(
    <header className={`header ${mode ? 'on' : ''}`}>
      <div className="header-connate">
      <h2 className="home"><a href="http://127.0.0.1:5500/pj-4-rest%20Contrys/">Where in the world?</a></h2>
      <h3 className="dark-mode" onClick={()=>{
      setMode(!mode)
      localStorage.setItem('mode',!mode)
      }}>
          {" "}<i className={`fa-solid fa-${mode ? 'sun': 'moon'}`}></i>
          {" "}<span className="dark">{mode ? 'Light Mode' : 'Dark Mode'}</span>
           </h3>
    </div>
    </header>

    )
  }
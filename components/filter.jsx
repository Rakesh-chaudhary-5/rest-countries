
export default function Filter({filterValue}) {

  const change = (e)=>{
    filterValue(e.target.value)
    }
  return (
    <div className="filter-container">
    <select className="manu" onChange={change}>
      <option hidden=" ">Filter by Region</option>
      <option value="" >None</option>
      <option value="Asia">Asia</option>
      <option value="America">America</option>
      <option value="Europe">Europe</option>
      <option value="Africa">Africa</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
    )
}

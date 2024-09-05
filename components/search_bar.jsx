
export default function search_bar({inputValue}) {
    const change = (e)=>{
        inputValue(e.target.value)
    } 
  return (
    <div className="search-container">
    <i className="fa-solid fa-magnifying-glass" />
    &nbsp;&nbsp;{" "}
    <input
      type="text"
      className="search-bar"
      placeholder="search for a country"
      onChange={change}
    />
  </div>
  )
}

// import React from 'react';

// export default function Search_bar({ onSearchChange }) {
//     const handleChange = (e) => {
//         onSearchChange(e.target.value);
//     };

//     return (
//         <div className="search-container">
//             <i className="fa-solid fa-magnifying-glass" />
//             &nbsp;&nbsp;{" "}
//             <input
//                 type="text"
//                 className="search-bar"
//                 placeholder="search for a country"
//                 onChange={handleChange}
//             />
//         </div>
//     );
// }

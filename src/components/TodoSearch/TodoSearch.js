import React from 'react'
import "../TodoSearch/TodoSearch.css"
import searchIcon from "../../assets/search-icon.svg"

function TodoSearch({
  searchValue,
  SetSearchValue,
}) {
  return (
    <div className="search-container">
      <input 
      type="text"  
      placeholder="Cut onion" 
      value={searchValue}
      onChange={(event) => {
        SetSearchValue(event.target.value)
      }}
      />
      <img className="search-icon" src={searchIcon} alt="search-icon" />
    </div>
  )
}

export { TodoSearch };
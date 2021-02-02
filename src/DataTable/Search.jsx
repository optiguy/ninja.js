import React from 'react'

const Search = (props) => {
  const { onSearch } = props

  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={onSearch.bind(this)} />
    </div>
  )
}

export default Search

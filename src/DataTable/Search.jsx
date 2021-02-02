import React from 'react'

export const Search = ({ onSearch = () => undefined }) => (
  <div className="p-b-1">
    <input
      type="search"
      className="form-control"
      placeholder="Søg brugere"
      onChange={onSearch}
    />
  </div>
)

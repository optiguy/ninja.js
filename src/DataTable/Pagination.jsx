import React from 'react'
import Page from './Page'

const getPages = ({ totalNumberOfPages, currentPageNumber, onChange }) =>
  Array.from(Array(totalNumberOfPages).keys()).map(pageNumber => {
    return (
      <Page
        key={pageNumber}
        currentPageNumber={currentPageNumber}
        pageNumber={pageNumber}
        onChange={onChange}
      />
    )
  })

export const Pagination = ({
  currentPageNumber,
  totalNumberOfPages,
  onChange,
}) => {
  const pages = getPages({ currentPageNumber, totalNumberOfPages, onChange })
  if (pages.length <= 1) {
    return null
  }
  return <ul className="pagination">{pages}</ul>
}

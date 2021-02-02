import React from 'react'

import Page from './Page'

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  const pages =
    Array
      .from(Array(totalNumberOfPages).keys())
      .map(pageNumber => {
        return <Page
          key={pageNumber}
          currentPageNumber={currentPageNumber}
          pageNumber={pageNumber}
          onChange={onChange} />
      })

  if (pages.length <= 1) {
    return null
  }
  return(
    <ul className="pagination">
      {pages}
    </ul>
  )
}

export default Pagination

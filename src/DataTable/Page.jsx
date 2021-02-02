import React, { useCallback } from 'react'

const Page = ({ pageNumber, currentPageNumber, onChange }) => {
  const click = useCallback(
    event => {
      event.preventDefault()
      onChange(pageNumber)
    },
    [pageNumber, onChange],
  )
  return (
    <li className="page-item mr-1">
      <button
        className={`page-link ${
          currentPageNumber === pageNumber ? 'button-outline' : ''
        }`}
        onClick={click}
      >
        {pageNumber + 1}
      </button>
    </li>
  )
}

export default Page

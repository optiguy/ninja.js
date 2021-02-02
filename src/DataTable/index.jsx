import React, { useState, useCallback } from 'react'
import { Search } from './Search'
import { Table } from './Table'
import { Pagination } from './Pagination'

export const calculateTotalNumberOfPages = ({ rows, rowsPerPage }) => {
  if (!rows || !rowsPerPage) return 0
  return Math.ceil(rows.length / Number(rowsPerPage))
}

export const rowsInPageNumber = ({ rowsPerPage, currentPageNumber }) => {
  const startIndex = currentPageNumber * rowsPerPage
  return [startIndex, startIndex + rowsPerPage]
}

// NOTE: Add optional chaining operator in stage 4 for more syntax sugar: https://github.com/tc39/proposal-optional-chaining
export const sliceToRowPerPage = ({
  dataRows,
  rowsPerPage,
  currentPageNumber,
}) =>
  dataRows &&
  dataRows.slice(...rowsInPageNumber({ rowsPerPage, currentPageNumber }))

export const filterRows = ({ row, text }) =>
  row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
  (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)

export const search = ({
  event,
  rows,
  rowsPerPage,
  setDataRows,
  setCurrentPageNumber,
  setTotalNumberOfPages,
}) => {
  const text = event.target.value
  const foundRows = !text ? rows : rows.filter(row => filterRows({ row, text }))
  setDataRows(foundRows)
  setCurrentPageNumber(0)
  setTotalNumberOfPages(
    calculateTotalNumberOfPages({ rows: foundRows, rowsPerPage }),
  )
}

export const DataTable = ({ rows = [], rowsPerPage = 40 }) => {
  const [dataRows, setDataRows] = useState(rows)
  const [currentPageNumber, setCurrentPageNumber] = useState(0)
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(
    calculateTotalNumberOfPages({ rows, rowsPerPage }),
  )

  // Limit the amount of initial rows to render
  const rowsToRender = sliceToRowPerPage({
    dataRows,
    rowsPerPage,
    currentPageNumber,
  })

  // Create search function with state functions
  const searchFunction = useCallback(
    event =>
      search({
        event,
        rows,
        rowsPerPage,
        setDataRows,
        setCurrentPageNumber,
        setTotalNumberOfPages,
      }),
    [
      rows,
      rowsPerPage,
      setDataRows,
      setCurrentPageNumber,
      setTotalNumberOfPages,
    ],
  )

  return (
    <>
      <Search onSearch={searchFunction} />
      <Table rowsToRender={rowsToRender} />
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={setCurrentPageNumber}
      />
    </>
  )
}

import React from 'react'
import { mount } from 'enzyme'
import { demoUsers } from '../api'
import {
  DataTable,
  calculateTotalNumberOfPages,
  rowsInPageNumber,
  sliceToRowPerPage,
  filterRows,
  search,
} from './'
import { Search } from './Search'
import { Table } from './Table'
import { Pagination } from './Pagination'

it('renders without crashing', () => {
  const dataTableWithoutProps = mount(<DataTable />)
  const dataTableWithEmptyProps = mount(<DataTable rows={[]} rowsPerPage={5} />)
  expect(dataTableWithoutProps.html()).toBeDefined()
  expect(dataTableWithEmptyProps.html()).toBeDefined()
})

it('renders 5 rows', () => {
  const wrapper = mount(<DataTable rows={demoUsers} rowsPerPage={5} />)
  expect(wrapper.find(Search).length).toEqual(1)
  expect(wrapper.find(Table).length).toEqual(1)
  expect(wrapper.find(Pagination).length).toEqual(1)
})

it('calculate the total number of pages', () => {
  const result40rows = calculateTotalNumberOfPages({
    rows: demoUsers,
    rowsPerPage: 40,
  })
  expect(result40rows).toBe(1)
  const result5rows = calculateTotalNumberOfPages({
    rows: demoUsers,
    rowsPerPage: 5,
  })
  expect(result5rows).toBe(3)
})

it('can calculate the page-numbers', () => {
  const resultFirstWith10 = rowsInPageNumber({
    rowsPerPage: 10,
    currentPageNumber: 0,
  })
  expect(resultFirstWith10).toEqual([0, 10])
  const resultFiveWith10 = rowsInPageNumber({
    rowsPerPage: 20,
    currentPageNumber: 5,
  })
  expect(resultFiveWith10).toEqual([100, 120])
})

it('can slice result to fit the current page', () => {
  const resultSliceFirst = sliceToRowPerPage({
    dataRows: demoUsers,
    rowsPerPage: 5,
    currentPageNumber: 0,
  })
  expect(resultSliceFirst).toHaveLength(5)

  const resultSliceSecond = sliceToRowPerPage({
    dataRows: demoUsers,
    rowsPerPage: 3,
    currentPageNumber: 1,
  })
  expect(resultSliceSecond).toHaveLength(3)

  const resultSliceLast = sliceToRowPerPage({
    dataRows: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    rowsPerPage: 6,
    currentPageNumber: 2,
  })
  expect(resultSliceLast).toHaveLength(0)
})

it('can search the rows', () => {
  const searchForMads = filterRows({ row: demoUsers[0], text: 'Mads' })
  expect(searchForMads).toBe(true)
  const searchForFalse = filterRows({
    row: demoUsers[0],
    text: 'Find nothing here',
  })
  expect(searchForFalse).toBe(false)
})

it('can use the search function', () => {
  const mock1 = jest.fn()
  const mock2 = jest.fn()
  const mock3 = jest.fn()
  search({
    event: { target: { value: 'Mads' } },
    rows: demoUsers,
    rowsPerPage: 5,
    setDataRows: mock1,
    setCurrentPageNumber: mock2,
    setTotalNumberOfPages: mock3,
  })
  expect(mock1).toHaveBeenCalledWith([demoUsers[0]])
  expect(mock2).toHaveBeenCalledWith(0)
  expect(mock3).toHaveBeenCalledWith(1)
})

it('filters rows based on input', () => {
  const wrapper = mount(<DataTable rows={demoUsers} rowsPerPage={5} />)
  expect(wrapper.find(Pagination)).toBeDefined()

  wrapper.find('input').simulate('change', { target: { value: 'kk' } })
  expect(wrapper.find('tr').length).toBe(2)
  expect(wrapper.find(Pagination)).toEqual({})

  wrapper.find('input').simulate('change', { target: { value: 'f' } })
  expect(wrapper.find('tr').length).toBe(3)
})

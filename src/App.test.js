import React from 'react'
import { mount, shallow } from 'enzyme'
import { demoUsers } from './api'
import { App } from './App'
import { DataTable } from './DataTable'

it('renders without crashing', () => {
  const appWithoutProps = shallow(<App />)
  const appWithEmptyProps = shallow(<App rows={[]} rowsPerPage={5} />)
  expect(appWithoutProps.html()).toBeDefined()
  expect(appWithEmptyProps.html()).toBeDefined()
})

it('renders a DataTable', () => {
  const wrapper = mount(<App rows={demoUsers} rowsPerPage={5} />)
  expect(wrapper.find(DataTable)).toHaveLength(1)
})

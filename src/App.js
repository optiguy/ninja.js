import React from 'react'
import { DataTable } from './DataTable'
import { demoUsers } from './api'
import './App.css'

// NOTE: Users could be served with context api
export const App = ({ rows = demoUsers, rowsPerPage = 5 }) => (
  <div className="container mt-3">
    <DataTable rows={rows} rowsPerPage={rowsPerPage} />
  </div>
)

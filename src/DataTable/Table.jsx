import React from 'react'
import { Row } from './Row'

// TODO: Normalize data from api instead of ugly underscore names directly used without any checks.
export const Table = ({ rowsToRender }) => (
  <table>
    <tbody>
      {rowsToRender.map(row => (
        <Row
          key={row.per_id}
          name={row.name1}
          email={row.email}
          url={row.edit_path}
        />
      ))}
    </tbody>
  </table>
)

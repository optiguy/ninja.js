import React from 'react'

export const Row = ({ url, name = 'UNKNOWN', email }) => {
  return (
    <tr>
      <td>
        {email ? <a href={url}>{name}</a> : name}
        {email && <br />}
        {email && <small>{email}</small>}
      </td>
    </tr>
  )
}

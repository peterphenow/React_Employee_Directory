import React from 'react';

function TableRows(props) {
  return (
    <div>
      <tr>
        <th scope='row'>1</th>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.phone}</td>
      </tr>
    </div>
  );
}

export default TableRows;

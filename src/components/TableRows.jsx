import React from 'react';

function TableRows(props) {
  return (
    <tr>
      <th scope='row'>1</th>
      <td>
        <img src={props.pic}></img>
      </td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.phone}</td>
    </tr>
  );
}

export default TableRows;

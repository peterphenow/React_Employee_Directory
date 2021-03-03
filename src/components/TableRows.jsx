import React from 'react';

function TableRows(props) {
  return (
    <tr>
      <th key={props.index}>{props.index}</th>
      <td>
        <img src={props.pic} alt={`${props.firstName} ${props.lastName}`}></img>
      </td>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.country}</td>
    </tr>
  );
}

export default TableRows;

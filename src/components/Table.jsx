import React from 'react';

function Table(props) {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col' onClick={props.sortTable}>
              #
            </th>
            <th scope='col'>Picture</th>
            <th scope='col' onClick={props.sortTable}>
              Title
            </th>
            <th scope='col' onClick={props.sortTable}>
              First
            </th>
            <th scope='col' onClick={props.sortTable}>
              Last
            </th>
            <th scope='col' onClick={props.sortTable}>
              Phone
            </th>
            <th scope='col' onClick={props.sortTable}>
              Email(click to sort!)
            </th>
            <th scope='col' onClick={props.sortTable}>
              Country
            </th>
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}

export default Table;

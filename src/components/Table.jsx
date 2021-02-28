import React from 'react';

function Table(props) {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Picture</th>
            <th scope='col'>Title</th>
            <th scope='col'>First</th>
            <th scope='col'>Last</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Email</th>
            <th scope='col'>Country</th>
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}

export default Table;

import React, { useState, useEffect } from 'react';
import getRandomEmployees from '../utils/API';
import Table from '../components/Table';
import TableRows from '../components/TableRows';
import FilterInput from '../components/FilterInput';

function Main() {
  const [getEmployees, setGetEmployees] = useState([]);
  const [getOrderType, setGetOrderType] = useState('descending');

  useEffect(() => {
    getRandomEmployees().then((data) => setGetEmployees(data.data.results));
  }, []);

  const sortTable = (e) => {
    e.preventDefault();
    //grabs the header name that was clicked.
    console.log(e.target.innerHTML.toLowerCase());
    if (getOrderType === 'descending') {
      let sortedArr = getEmployees.sort(ascendingSort);
      console.log(sortedArr);
      setGetOrderType('ascending');
    } else {
      let sortedArr = getEmployees.sort(descendingSort);
      console.log(sortedArr);
      setGetOrderType('descending');
    }
  };

  const ascendingSort = (a, b) => {
    if (a.email < b.email) {
      return -1;
    } else if (a.email > b.email) {
      return 1;
    } else {
      return 0;
    }
  };

  const descendingSort = (a, b) => {
    if (a.email < b.email) {
      return 1;
    } else if (a.email > b.email) {
      return -1;
    } else {
      return 0;
    }
  };

  return (
    <div>
      <FilterInput />
      <Table sortTable={sortTable}>
        {getEmployees.map((employee, index) => (
          <>
            {/* {console.log(employee)} */}
            <TableRows
              index={index + 1}
              pic={employee.picture.thumbnail}
              title={employee.name.title}
              firstName={employee.name.first}
              lastName={employee.name.last}
              phone={employee.phone}
              email={employee.email}
              country={employee.location.country}
            />
          </>
        ))}
      </Table>
    </div>
  );
}

export default Main;

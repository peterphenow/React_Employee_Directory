import React, { useState, useEffect } from 'react';
import getRandomEmployees from '../utils/API';
import Table from '../components/Table';
import TableRows from '../components/TableRows';
import FilterInput from '../components/FilterInput';

function Main() {
  const [getEmployees, setGetEmployees] = useState([]);

  useEffect(() => {
    getRandomEmployees().then((data) => setGetEmployees(data.data.results));
  }, []);

  return (
    <div>
      <FilterInput />
      <Table>
        {getEmployees.map((employee, index) => (
          <>
            {console.log(employee)}
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

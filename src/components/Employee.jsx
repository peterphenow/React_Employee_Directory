import React, { useState, useEffect } from 'react';
import getRandomEmployees from '../utils/API';
import Table from './Table';
import TableRows from './TableRows';

function Employee() {
  const [getEmployees, setGetEmployees] = useState([]);

  useEffect(() => {
    getRandomEmployees().then((data) => setGetEmployees(data.data.results));
  }, []);

  return (
    <div>
      <Table>
        {getEmployees.map((employee) => (
          <>
            {console.log(employee)}
            <TableRows firstName={employee.name.first} lastName={employee.name.last} phone={employee.phone} />
          </>
        ))}
      </Table>
    </div>
  );
}

export default Employee;

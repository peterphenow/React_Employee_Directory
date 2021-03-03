import React, { useState } from 'react';

function FilterInput() {
  const [filterState, setFilterState] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filterState);
  };

  return (
    <div>
      <span>Filter By First Name Here: </span>
      <input onSubmit={handleSubmit} />
      <button className='btn btn-success' type='submit'>
        Filter
      </button>
    </div>
  );
}

export default FilterInput;

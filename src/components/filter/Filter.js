import React from 'react';

function Filter({ getFilterValue, value }) {
  return (
    <>
      <h3>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          onChange={getFilterValue}
          value={value}
          placeholder="..."
        />
      </h3>
    </>
  );
}

export default Filter;

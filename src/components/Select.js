import React from 'react';

const Select = ({ value, count, onChange }) => (
  <div className="select">
    <select
      value={value}
      onChange={onChange}
    >
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={100}>100</option>
      <option value={count}>All</option>
    </select>
    Displaying
    {` 1 - ${value} of ${count} records`}
  </div>
);

export default Select;

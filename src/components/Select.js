import React from 'react';
import { connect } from 'react-redux';
import { changeDisplay } from '../actions';

const Select = ({ value, count, changeDisplay }) => (
  <div className="select">
    <select
      value={value}
      onChange={changeDisplay}
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

const mapDispatchToProps = dispatch => ({
  changeDisplay: ({ target: { value } }) => dispatch(changeDisplay(value)),
});

export default connect(null, mapDispatchToProps)(Select);

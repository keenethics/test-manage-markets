import React from 'react';

const Switch = ({ options, checked = 0, onClick }) => (
  <div className="switch-buttons">
    {options.map((item, i) => (
      <button
        type="button"
        key={i}
        className={i === checked ? 'switch-checked' : ''}
        onClick={onClick(i)}
      >
        {item}
      </button>
    ))}
  </div>
);

export default Switch;

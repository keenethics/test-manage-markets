import React from 'react';

const handleImages = (category, data, children) => {
  if (category !== 'image') return false;
  if (children) return ' ';
  if (Array.isArray(data)) return data.map((url, i) => <img key={i} src={url} alt="" />);
  return false;
};

const Row = ({ row = [], children }) => (
  <tr>
    {Object.entries(row).map(([category, data]) => (
      <td key={category}>
        {handleImages(category, data, children) || children || data}
      </td>
    ))}
  </tr>
);

export default Row;

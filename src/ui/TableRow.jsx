import React from 'react';

export const TableRow = props => {
  return (
    <tr>
      {props.data.map((el, i) => (
        <td >{el}</td>
      ))}
    </tr>
  );
};

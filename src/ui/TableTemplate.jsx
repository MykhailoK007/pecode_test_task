import React, { useEffect } from 'react';
import { TableRow } from './TableRow';

export const TableTemplate = props => {
  return (
    <div className='tableWrapper'>
      <table>
        <thead>
          <tr>
            {props.tableHeaders.map((el, i) => {
              return <th key={i}>{el}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.page === 'episode' &&
            props.dataList.map(el => {
              const data = [el.episode, el.name, el.air_date];
              return <TableRow data={data} key={el.name + el.episode} />;
            })}
          {props.page === 'location' &&
            props.dataList.map(el => {
              const data = [el.name, el.dimension, el.type];
              return <TableRow data={data} key={el.name} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

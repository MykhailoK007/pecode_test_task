import React, {useEffect} from 'react';
import { Episode } from '../routes/episode-page/Episode';

export const TableTemplate = props => {
  useEffect(()=>{},[])
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
          {props.page === 'episode' && props.dataList.map(el => {
            const data = [el.episode, el.name, el.air_date];
            return <Episode data={data} key={el.name + el.episode} />;
          })}
          {props.page === 'location' && props.dataList.map(el => {
            const data = [el.name,el.dimension, el.type];
            return <Episode data={data} key={el.name} />
          })
          }
        </tbody>
      </table>
    </div>
  );
};

import React, { useRef } from 'react';
import { promiseTemplate } from './functionalTemplates';

export const ListItem = props => {
  let input = useRef(null);
  const handleClick = e => {
    promiseTemplate(
      () => props.getItemInfo(props.id),
      () => (input.current.checked = !input.current.checked)
    );
  };

  return (
    <div className={'characterWrapper'} onClick={handleClick}>
      <input type='radio' name='character' ref={input} hidden />
      <img src={props.image} alt='' />
      <div>{props.name}</div>

      {input.current && input.current.checked && (
        <div className='additionalInfoWrapper'>
          <div className='additionalInfo'>
            <img src={props.image} alt='' />
            <div>
              {Object.entries(props.data).map(element => {
                return <div>{`${element[0]}:${element[1]}`}</div>;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

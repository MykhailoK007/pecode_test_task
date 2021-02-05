import React, { useRef } from 'react';
import { PopUp } from './PopUp';

export const Character = props => {
  let input = useRef(null);
  const handleClick = () => {
    new Promise(res => res(props.getItemInfo(props.id))).then(
      () => (input.current.checked = !input.current.checked)
    );
  };

  return (
    <div className={'characterWrapper'} onClick={handleClick}>
      <input type='radio' name='character' ref={input} hidden />
      <img src={props.image} alt={props.name} />
      <div>{props.name}</div>
      {input.current && input.current.checked && (
        <PopUp characterData={props.characterData} image={props.image} />
      )}
    </div>
  );
};

import React, { useRef } from 'react';
import  classes from './styles.scss';

export const Character = props => {
  let input = useRef(null);
  const handleClick = e => {
    new Promise(res => res(props.getItemInfo(props.id))).then(
      () => (input.current.checked = !input.current.checked)
    );
  };
  return (
    <div className={classes.characterWrapper} onClick={handleClick}>
      <input type='radio' name='character' ref={input} hidden />
      <img src={props.image} alt='' />
      <div>{props.name}</div>

      {input.current && input.current.checked && (
        <div className={classes.additionalInfoWrapper}>
          <div className={classes.additionalInfo}>
            <img src={props.image} alt='' />
            <div>
              <div>{props.name}</div>
              <div>Status:{props.status}</div>
              <div>Species:{props.species}</div>
              <div>Gender:{props.gender}</div>
              <div>Origin:{props.origin}</div>
              <div>Location:{props.location}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

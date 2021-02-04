import React from 'react';
import classes from '../routes/character-page/styles.scss';

export const PopUp = props => {
  return (
    <div className={classes.additionalInfoWrapper}>
      <div className={classes.additionalInfo}>
        <img src={props.image} alt='' />
        <div>
          {Object.entries(props.data).map(element => {
            return <div>{`${element[0]}:${element[1]}`}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

import React from 'react';

export const PopUp = props => {
  return (
    <div className='additionalInfoWrapper'>
      <div className='additionalInfo'>
        <img src={props.image} alt='' />
        <div>
          {Object.entries(props.characterData).map(element => {
            return <div key={element}>{`${element[0]}: ${element[1]}`}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

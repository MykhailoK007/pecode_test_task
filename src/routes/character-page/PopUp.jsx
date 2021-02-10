import React from 'react';

export const PopUp = props => {
  return (
    <div className='additional-info-wrapper'>
      <div className='additional-info'>
        <div className='additional-info-close-btn'>
          <input
            type='button'
            value={'x'}
            onClick={props.toggleAdditionalInfo}
          />
        </div>
        <img src={props.image} />
        <div>
          {Object.entries(props.characterData).map(element => {
            return <div key={element}>{`${element[0]}: ${element[1]}`}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

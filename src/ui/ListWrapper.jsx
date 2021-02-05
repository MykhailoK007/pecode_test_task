import React from 'react';
import { Character } from '../routes/character-page/Character';
import '../styles.scss';

export const ListWrapper = props => {
  const getItemInfo = id => {
    props.getItemData(id);
  };

  return (
    <>
      {props.page === 'character' && (
        <div className={'characterList'}>
          {props.dataList.map(character => {
            const { name, image, id } = character;
            return (
              <Character
                getItemInfo={getItemInfo}
                name={name}
                image={image}
                key={id}
                id={id}
                characterData={props.characterData}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

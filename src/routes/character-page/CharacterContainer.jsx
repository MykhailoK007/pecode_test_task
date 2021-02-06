import React from 'react';
import { Character } from './Character';

export const CharacterContainer = props => {
  return (
    <div className={'characterList'}>
      {props.dataList.map(character => {
        const { name, image, id } = character;
        return (
          <Character
            getItemInfo={props.getItemInfo}
            name={name}
            image={image}
            key={name}
            id={id}
            characterData={props.characterData}
          />
        );
      })}
    </div>
  );
};

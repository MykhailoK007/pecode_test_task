import React, { useRef } from 'react';
import { PopUp } from './PopUp';
import { promiseTemplate } from '../../ui/functionalTemplates';

export const CharacterInfo = props => {
  const getItemInfo = id => {
    props.getItemData(id);
  };
  const handleClick = (id, input) => {
    promiseTemplate(
      getItemInfo.bind(null, id),
      () => (input.current.checked = !input.current.checked)
    );
  };

  return (
    <div className='character-list'>
      {props.dataList.map(character => {
        const { name, image, id } = character;
        let input = useRef(null);
        return (
          <>
            <div
              className={'character-wrapper'}
              onClick={() => handleClick(id, input)}
              key={image}>
              <input type='radio' name='character' ref={input} hidden />
              <img src={image} alt={name} />
              <div>{name}</div>
            </div>
            {input.current?.checked && (
              <PopUp
                characterData={props.characterData}
                image={image}
                toggleAdditionalInfo={handleClick.bind(null, id, input)}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

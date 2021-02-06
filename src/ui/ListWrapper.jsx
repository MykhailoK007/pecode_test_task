import React from 'react';
import '../styles.scss';
import { TableTemplate } from './TableTemplate';
import { CharacterContainer } from '../routes/character-page/CharacterContainer';

export const ListWrapper = props => {
  const getItemInfo = id => {
    props.getItemData(id);
  };
  return (
    <>
      {props.page === 'character' && (
        <CharacterContainer
          dataList={props.dataList}
          characterData={props.characterData}
          getItemInfo={getItemInfo}
        />
      )}
      {props.page === 'episode' && (
        <TableTemplate
          tableHeaders={['episode', 'name', 'created']}
          dataList={props.dataList}
          page={props.page}
        />
      )}
      {props.page === 'location' && (
        <TableTemplate
          tableHeaders={['name', 'dimension', 'type']}
          dataList={props.dataList}
          page={props.page}
        />
      )}

    </>
  );
};

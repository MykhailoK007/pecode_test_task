import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCharacterData, fetchDataList } from '../../redux/reducer';
import { PageTemplate } from '../../ui/PageTemplate';

const CharacterContainer = props => {
  useEffect(() => {
    props.fetchDataList('character');
  }, []);
  return (
    <PageTemplate
      dataList={props.charactersList}
      getItemData={props.fetchCharacterData}
      characterData={props.currentCharacterData}
      updateDataList={props.fetchDataList}
      pageName='character'
      pageCount={props.pageCount}
    />
  );
};

const mapStateToProps = state => {
  return {
    charactersList: state.charactersList,
    currentCharacterData: state.currentCharacterData,
    pageCount: state.pageCount,
  };
};

export default connect(mapStateToProps, { fetchCharacterData, fetchDataList })(
  CharacterContainer
);

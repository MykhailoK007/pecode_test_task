import React from 'react';
import PageTemplate from '../../ui/PageTemplate';
import { connect } from 'react-redux';
import {
  fetchCharacterData,
  fetchEpisodesList,
  setCurrentPage,
} from '../../redux/reducer';

const Episode = props => {
  debugger;
  return (
    <PageTemplate
      list={props.charactersList}
      itemData={{ ...props.currentCharacterData }}
      fetchData={props.fetchEpisodesList}
      fetchItemData={props.fetchCharacterData}
      pageCount={props.pageCount}
      pageName='episode'
    />
  );
};
function mapStateToProps(state) {
  return {
    charactersList: state.charactersList,
    currentCharacterData: state.currentCharacterData,
    pageCount: state.pageCount,
  };
}
export default connect(mapStateToProps, {
  fetchEpisodesList,
  fetchCharacterData,
  setCurrentPage,
})(Episode);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  fetchCharacterData,
  fetchCharactersList,
  fetchEpisodeData,
  fetchEpisodesList,
} from '../redux/reducer';
import Pagination from '@material-ui/lab/Pagination';
import { ListWrapper } from './ListWrapper';

//Distinguishes pages and return data for that page
const PageTemplate = props => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    getDataList();
  }, [1]);
  const getDataList =
    props.page === 'character'
      ? props.fetchCharactersList
      : props.fetchEpisodesList;
  const getItemData =
    props.page === 'character'
      ? props.fetchCharacterData
      : props.fetchEpisodeData;

  const changePage = (e, page) => {
    debugger;
    new Promise(res => {
      res(setPage(page));
    }).then(() => {
      getDataList(page);
    });
  };
  return (
    <>
      <ListWrapper
        page={props.page}
        dataList={props.dataList}
        getItemData={getItemData}
        characterData={props.currentCharacterData}
      />
      <Pagination
        count={props.pageCount}
        page={page}
        className='pagination'
        onChange={changePage}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    dataList: state.dataList,
    currentCharacterData: state.currentCharacterData,
    pageCount: state.pageCount,
  };
};

export default connect(mapStateToProps, {
  fetchCharactersList,
  fetchEpisodesList,
  fetchCharacterData,
  fetchEpisodeData,
})(PageTemplate);

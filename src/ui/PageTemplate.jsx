import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  fetchCharacterData,
  fetchCharactersList,
  fetchDataList,
  fetchEpisodesList,
} from '../redux/reducer';
import Pagination from '@material-ui/lab/Pagination';
import { ListWrapper } from './ListWrapper';

//Distinguishes pages and return data for that page
const PageTemplate = props => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    props.fetchDataList(props.page);
  },[props.page]);

  const changePage = (e, currentPage) => {
    new Promise(res => {
      res(setPage(currentPage));
    }).then(() => {
      props.fetchDataList(props.page, currentPage);
    });
  };
  return (
    <>
      <ListWrapper
        page={props.page}
        dataList={props.dataList}
        getItemData={props.fetchCharacterData}
        characterData={props.currentCharacterData}
        fetchDataList = {props.fetchDataList}
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
  fetchDataList,
})(PageTemplate);

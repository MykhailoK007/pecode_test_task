import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCharacterData, fetchDataList } from '../redux/reducer';
import Pagination from '@material-ui/lab/Pagination';
import { ListWrapper } from './ListWrapper';
import { promiseTemplate } from './functionalTemplates';

//Distinguishes pages and return data for that page
const PageTemplate = props => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    props.fetchDataList(props.page);
  }, [props.page]);

  const changePage = (e, currentPage) => {
    promiseTemplate(
      setPage.bind(null, currentPage),
      props.fetchDataList.bind(null, props.page, currentPage)
    );
  };
  return (
    <>
      <ListWrapper
        page={props.page}
        dataList={props.dataList}
        getItemData={props.fetchCharacterData}
        characterData={props.currentCharacterData}
        fetchDataList={props.fetchDataList}
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
  fetchCharacterData,
  fetchDataList,
})(PageTemplate);

import React, { useState } from 'react';
import { CharacterInfo } from '../routes/character-page/CharacterInfo';
import { promiseTemplate } from './functionalTemplates';
import Pagination from '@material-ui/lab/Pagination';

//Distinguishes pages and return data for that page
export const PageTemplate = props => {
  const [page, setPage] = useState(1);
  const changePage = (e, currentPage) => {
    promiseTemplate(
      setPage.bind(null, currentPage),
      props.updateDataList.bind(null, props.pageName, currentPage)
    );
  };
  return (
    <>
      <CharacterInfo
        getItemData={props.getItemData}
        characterData={props.characterData}
        dataList={props.dataList}
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

const characterURL = 'https://rickandmortyapi.com/api/character';
const baseUrl = 'https://rickandmortyapi.com/api/';

export const getAPI = {
  characterData: id => {
    return fetch(`${characterURL}/${id}`).then(result => result.json());
  },
  dataList: (page, pageName) => {
    return fetch(`${baseUrl + pageName}/?page=${page}`).then(result =>
      result.json()
    );
  },
};

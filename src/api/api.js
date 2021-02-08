const characterURL = 'https://rickandmortyapi.com/api/character';
const episodeURL = 'https://rickandmortyapi.com/api/episode';
const baseUrl = 'https://rickandmortyapi.com/api/';

export const getAPI = {
  characters: page => {
    return fetch(`${characterURL}/?page=${page}`).then(result => result.json());
  },
  characterData: id => {
    return fetch(`${characterURL}/${id}`).then(result => result.json());
  },
  charactersWithFilter: (name, value) => {
    return fetch(`${characterURL}/?${name}=${value}`).then(result =>
      result.json()
    );
  },
  episodes: page => {
    return fetch(`${episodeURL}/?page=${page}`).then(result => result.json());
  },
  episodeData: id => {
    return fetch(`${episodeURL}/${id}`).then(result => result.json());
  },
  dataList: (page, pageName) => {
    return fetch(`${baseUrl + pageName}/?page=${page}`).then(result =>
      result.json()
    );
  },
};

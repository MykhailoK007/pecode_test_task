import { getAPI } from '../api/api';

const SET_CHARACTERS_LIST = 'SET_CHARACTERS_LIST';
const SET_CURRENT_CHARACTER_DATA = 'SET_CURRENT_CHARACTER_DATA';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_CURRENT_EPISODE = 'SET_CURRENT_EPISODE';
const SET_EPISODE_LIST = 'SET_EPISODE_LIST';
const UPDATE_CHARACTERS_LIST = 'UPDATE_CHARACTERS_LIST';
const initialState = {
  dataList: [],
  currentCharacterData: {},
  pageCount: 0,
  currentPage: 1,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS_LIST:
      let firstPart = action.data.results.slice(0, 10);
      let secondPart = action.data.results.slice(10, 20);
      let part = action.page % 2 !== 0 ? firstPart : secondPart;
      let calculatedPageCount = Math.ceil(action.data.info.count / 10);
      return {
        ...state,
        dataList: [...part],
        pageCount: calculatedPageCount,
      };
    case SET_EPISODE_LIST:
      debugger;
      return {
        ...state,
        dataList: [...action.data.results],
        pageCount: action.data.info.pages,
      };
    case SET_CURRENT_EPISODE:
      debugger;
      return {
        ...state,
        currentCharacterData: {
          air_date: action.air_date,
          episode: action.episode,
          characters: [...action.characters],
        },
      };
    case SET_CURRENT_CHARACTER_DATA:
      return {
        ...state,
        currentCharacterData: {
          status: action.status,
          species: action.species,
          gender: action.gender,
          origin: action.origin,
          location: action.location,
        },
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case UPDATE_CHARACTERS_LIST:
      return {
        ...state,
        dataList: [],
      };
    default:
      return state;
  }
};

const setCharacterList = (data, page) => {
  return {
    type: SET_CHARACTERS_LIST,
    data,
    page,
  };
};
const setEpisodeList = (data, page) => {
  debugger;
  return {
    type: SET_EPISODE_LIST,
    data,
    page,
  };
};
const setCurrentCharacterDate = data => {
  const { status, species, gender, origin, location } = data;
  return {
    type: SET_CURRENT_CHARACTER_DATA,
    status,
    species,
    gender,
    origin: origin.name,
    location: location.name,
  };
};
const setCurrentEpisodeDate = data => {
  const { air_date, episode, characters } = data;
  return {
    type: SET_CURRENT_EPISODE,
    air_date,
    episode,
    characters,
  };
};
export const setCurrentPage = page => {
  return {
    type: SET_CURRENT_PAGE,
    page,
  };
};
export const fetchCharactersList = (page = 1, pageName) => dispatch => {
  //Change count of items on page
  const dividePage = page / 2;
  getAPI
    .characters(Math.ceil(dividePage))
    .then(data => dispatch(setCharacterList(data, page)));
};
export const fetchCharacterData = id => dispatch => {
  getAPI
    .characterData(id)
    .then(data => dispatch(setCurrentCharacterDate(data)));
};
export const fetchEpisodesList = (page = 1) => dispatch => {
  getAPI.episodes(page).then(data => dispatch(setEpisodeList(data)));
};
export const fetchEpisodeData = id => dispatch => {
  getAPI.episodeData(id).then(data => dispatch(setCurrentEpisodeDate(data)));
};

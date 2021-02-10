import { getAPI } from '../api/api';

const SET_CHARACTERS_LIST = 'SET_CHARACTERS_LIST';
const SET_EPISODES_LIST = 'SET_EPISODES_LIST';
const SET_LOCATIONS_LIST = 'SET_LOCATIONS_LIST';
const SET_CURRENT_CHARACTER_DATA = 'SET_CURRENT_CHARACTER_DATA';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const UPDATE_CHARACTERS_LIST = 'UPDATE_CHARACTERS_LIST';
const initialState = {
  dataList: [],
  charactersList: [],
  episodesList: [],
  locationsList: [],
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
        charactersList: [...part],
        pageCount: calculatedPageCount,
      };
    case SET_EPISODES_LIST:
      return {
        ...state,
        episodesList: [
          ...action.data.results.map(el => ({
            name: el.name,
            episode: el.episode,
            air_date: el.air_date,
          })),
        ],
        pageCount: action.data.info.pages,
      };
    case SET_LOCATIONS_LIST:
      return {
        ...state,
        locationsList: [
          ...action.data.results.map(el => ({
            name: el.name,
            dimension: el.dimension,
            type: el.type,
          })),
        ],
        pageCount: action.data.info.pages,
      };
    case SET_CURRENT_CHARACTER_DATA:
      const { status, species, gender, origin, location } = action.data;
      return {
        ...state,
        currentCharacterData: {
          status: status,
          species: species,
          gender: gender,
          origin: origin.name,
          location: location.name,
        },
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
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
const setEpisodeList = data => {
  return {
    type: SET_EPISODES_LIST,
    data,
  };
};
const setCurrentCharacterDate = data => {
  return {
    type: SET_CURRENT_CHARACTER_DATA,
    data,
  };
};
const setLocationList = data => {
  return {
    type: SET_LOCATIONS_LIST,
    data,
  };
};
export const fetchCharacterData = id => dispatch => {
  getAPI
    .characterData(id)
    .then(data => dispatch(setCurrentCharacterDate(data)));
};

export const fetchDataList = (pageName, page = 1) => dispatch => {
  dispatch({ type: UPDATE_CHARACTERS_LIST });
  switch (pageName) {
    case 'character':
      const dividePage = Math.ceil(page / 2);
      getAPI
        .dataList(dividePage, pageName)
        .then(data => dispatch(setCharacterList(data, page)));
      return true;
    case 'episode':
      getAPI
        .dataList(page, pageName)
        .then(data => dispatch(setEpisodeList(data)));
      return true;
    case 'location':
      getAPI
        .dataList(page, pageName)
        .then(data => dispatch(setLocationList(data)));
      return true;
  }
};

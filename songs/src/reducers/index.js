import { combineReducers } from 'redux';

const songsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_SONGS':
      return action.payload;
    default:
      return state;
  }
};

const selectedSongReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_SONG':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

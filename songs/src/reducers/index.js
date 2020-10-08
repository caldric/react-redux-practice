import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'my future', artist: 'Billie Eilish' },
    { title: 'Honest Man', artist: 'Ben Platt' },
    { title: 'Bohemian Rhapsody', artist: 'Queen' },
    { title: "I'm Not the Only One", artist: 'Sam Smith' },
  ];
};

const selectedSongReducer = (state = {}, action) => {
  switch (action.type) {
    case '':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ songsReducer });

import { combineReducers } from 'redux';

const songs = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' },
  ];
};

const selectedSong = (song = null, action) => {
  if (action.type === 'SELECTED_SONG') {
    return action.payload;
  }

  return song;
};

export default combineReducers({ songs, selectedSong });

export const getSongs = () => {
  const staticSongs = [
    { title: 'my future', artist: 'Billie Eilish' },
    { title: 'Honest Man', artist: 'Ben Platt' },
    { title: 'Bohemian Rhapsody', artist: 'Queen' },
    { title: "I'm Not the Only One", artist: 'Sam Smith' },
  ];

  return { type: 'GET_SONGS', payload: staticSongs };
};

export const selectSong = (song) => {
  return { type: 'SELECT_SONG', payload: song };
};

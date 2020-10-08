import React from 'react';
import SongDetail from './SongDetail';
import SongList from './SongList';

const App = () => {
  return (
    <div>
      <SongList />
      <hr />
      <SongDetail />
    </div>
  );
};

export default App;

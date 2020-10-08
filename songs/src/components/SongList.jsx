import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSongs, selectSong } from '../actions';

const SongList = ({ songs, getSongs, selectSong }) => {
  useEffect(() => {
    getSongs();
  }, []);

  const renderList = () => {
    return songs.map((song) => {
      return (
        <div>
          <div>{song.title}</div>
          <div>
            <button type="button" onClick={() => selectSong(song)}>
              Select
            </button>
          </div>
        </div>
      );
    });
  };

  return <div>{renderList()}</div>;
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { getSongs, selectSong })(SongList);

import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) return <div>Select a song</div>;
  return (
    <div>
      <h2>Details For: </h2>
      <p>Title: {selectedSong.title}</p>
      <p>Artist: {selectedSong.artist}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);

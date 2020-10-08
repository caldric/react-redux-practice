import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSongs, selectSong } from '../actions';

class SongList extends Component {
  componentDidMount() {
    this.props.getSongs();
  }

  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div>
          <div>{song.title}</div>
          <div>
            <button type="button" onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { getSongs, selectSong })(SongList);

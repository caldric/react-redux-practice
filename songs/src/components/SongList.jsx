import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSongs } from '../actions';

class SongList extends Component {
  componentDidMount() {
    this.props.getSongs();
  }

  renderList() {
    return this.props.songs.map((song) => {
      return <div>{song.title}</div>;
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { getSongs })(SongList);

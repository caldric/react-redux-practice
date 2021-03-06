import React, { Component } from 'react';
import { deleteStream, fetchStream } from '../../actions';

import { Link } from 'react-router-dom';
import Modal from '../Modal';
import { connect } from 'react-redux';
import history from '../../history';

class StreamDelete extends Component {
  streamID = this.props.match.params.id;

  componentDidMount() {
    this.props.fetchStream(this.streamID);
  }

  renderActions() {
    return (
      <>
        <button
          onClick={() => this.props.deleteStream(this.streamID)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}?`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return { stream: state.streams[id] };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(
  StreamDelete
);

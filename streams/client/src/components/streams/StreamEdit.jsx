import React, { Component } from 'react';
import { editStream, fetchStream } from '../../actions';

import StreamForm from './StreamForm';
import _ from 'lodash';
import { connect } from 'react-redux';

class StreamEdit extends Component {
  streamID = this.props.match.params.id;

  componentDidMount() {
    this.props.fetchStream(this.streamID);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.streamID, formValues);
  };

  render() {
    const stream = this.props.stream;

    if (!stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          initialValues={_.pick(stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return { stream: state.streams[id] };
};

export default connect(mapStateToProps, { editStream, fetchStream })(
  StreamEdit
);

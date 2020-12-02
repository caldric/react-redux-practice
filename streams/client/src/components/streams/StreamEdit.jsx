import React, { Component } from 'react';
import { editStream, fetchStream } from '../../actions';

import StreamForm from './StreamForm';
import { connect } from 'react-redux';

class StreamEdit extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    const stream = this.props.stream;

    if (!stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm initialValues={stream} onSubmit={this.onSubmit} />
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

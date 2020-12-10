import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

const StreamShow = ({ fetchStream, match, stream }) => {
  const streamID = match.params.id;

  useEffect(() => {
    fetchStream(streamID);
  }, [fetchStream, streamID]);

  if (!stream) return <div>Loading...</div>;

  return (
    <div>
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return { stream: state.streams[id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);

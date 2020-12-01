import React from 'react';

const StreamEdit = ({ match }) => {
  return <div>{`You are editing stream ID: ${match.params.id}`}</div>;
};

export default StreamEdit;

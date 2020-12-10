import React, { Component } from 'react';

import UserCreate from './UserCreate';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">
        <UserCreate />
      </div>
    );
  }
}

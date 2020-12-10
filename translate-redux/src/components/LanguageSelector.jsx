import React, { Component } from 'react';

export default class LanguageSelector extends Component {
  render() {
    return (
      <div>
        Select a language:
        <i className="flag us"></i>
        <i className="flag nl"></i>
      </div>
    );
  }
}

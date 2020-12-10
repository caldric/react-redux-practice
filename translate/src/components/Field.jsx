import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

export default class Field extends Component {
  static contextType = LanguageContext;

  labelText() {
    switch (this.context) {
      case 'english':
        return 'Name';
      case 'dutch':
        return 'Naam';
      default:
        return 'Name';
    }
  }

  render() {
    return (
      <div className="ui field">
        <label>{this.labelText()}</label>
        <input />
      </div>
    );
  }
}

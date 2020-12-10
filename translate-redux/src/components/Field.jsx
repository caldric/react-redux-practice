import React, { Component } from 'react';

export default class Field extends Component {
  labelText(language) {
    switch (language) {
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
        <input type="text" />
      </div>
    );
  }
}

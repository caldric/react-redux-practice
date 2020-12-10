import React, { Component } from 'react';

export default class Button extends Component {
  buttonText(language) {
    switch (language) {
      case 'english':
        return 'Submit';
      case 'dutch':
        return 'Voorleggen';
      default:
        return 'Submit';
    }
  }
  render() {
    return <button className="ui button primary">{this.buttonText()}</button>;
  }
}

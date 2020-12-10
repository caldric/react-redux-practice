import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

export default class Button extends Component {
  static contextType = LanguageContext;

  submitText() {
    switch (this.context) {
      case 'english':
        return 'Submit';
      case 'dutch':
        return 'Voorleggen';
      default:
        return 'Submit';
    }
  }

  render() {
    return <button className="ui button primary">{this.submitText()}</button>;
  }
}

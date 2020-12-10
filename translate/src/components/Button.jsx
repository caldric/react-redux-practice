import React, { Component } from 'react';

import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

export default class Button extends Component {
  submitText(language) {
    switch (language) {
      case 'english':
        return 'Submit';
      case 'dutch':
        return 'Voorleggen';
      default:
        return 'Submit';
    }
  }

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>{this.submitText}</LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return <ColorContext.Consumer>{this.renderButton}</ColorContext.Consumer>;
  }
}

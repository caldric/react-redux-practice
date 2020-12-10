import React, { Component } from 'react';

import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import UserCreate from './UserCreate';

export default class App extends Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

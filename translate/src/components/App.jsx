import React, { Component } from 'react';

import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';
import UserCreate from './UserCreate';

export default class App extends Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange('english')}
          ></i>
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange('dutch')}
          ></i>
        </div>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

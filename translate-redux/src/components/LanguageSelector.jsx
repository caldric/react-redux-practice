import React, { Component } from 'react';

import { connect } from 'react-redux';
import { selectLanguage } from '../actions';

class LanguageSelector extends Component {
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.props.selectLanguage('english')}
        ></i>
        <i
          className="flag nl"
          onClick={() => this.props.selectLanguage('dutch')}
        ></i>
      </div>
    );
  }
}

export default connect(null, { selectLanguage })(LanguageSelector);

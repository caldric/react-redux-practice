import React, { Component } from 'react';

import Button from './Button';
import Field from './TextField';
import LanguageSelector from './LanguageSelector';

export default class UserCreate extends Component {
  render() {
    return (
      <div className="ui form">
        <LanguageSelector />
        <Field />
        <Button />
      </div>
    );
  }
}

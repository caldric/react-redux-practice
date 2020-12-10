import React, { Component } from 'react';

import { connect } from 'react-redux';

class Field extends Component {
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
        <label>{this.labelText(this.props.language)}</label>
        <input type="text" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { language: state.language };
};

export default connect(mapStateToProps)(Field);

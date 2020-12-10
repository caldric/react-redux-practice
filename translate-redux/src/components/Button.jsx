import React, { Component } from 'react';

import { connect } from 'react-redux';

class Button extends Component {
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
    return (
      <button className="ui button primary">
        {this.buttonText(this.props.language)}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return { language: state.language };
};

export default connect(mapStateToProps)(Button);

import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';

import { connect } from 'react-redux';

class TextField extends Component {
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

  renderInput({ input }) {
    return <input {...input} />;
  }

  render() {
    return (
      <form className="ui field">
        <label>{this.labelText(this.props.language)}</label>
        <Field name="text" component={this.renderInput} />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { language: state.language };
};

const ReduxField = reduxForm({ form: 'sampleText' })(TextField);

export default connect(mapStateToProps)(ReduxField);

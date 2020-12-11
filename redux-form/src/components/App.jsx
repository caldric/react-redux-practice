import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';

class App extends Component {
  submit(values) {
    console.log(values);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <label htmlFor="name">Full Name</label>
        <br />
        <Field name="name" component="input" type="text" />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <Field name="email" component="input" type="text" />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({ form: 'sampleForm' })(App);

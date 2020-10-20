import React, { Component } from 'react';

class App extends Component {
  state = { lat: null, month: null, errorMessage: '' };

  getLatitude() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  getMonth() {
    return new Date().getMonth();
  }

  componentDidMount() {
    this.setState({ lat: this.getLatitude(), month: this.getMonth() });
  }

  inNorthernHemisphere(latitude) {
    return latitude > 0;
  }

  render() {
    // Extract state variables
    const { lat, month, errorMessage } = this.state;

    // Return values
    if (errorMessage) return <div>{errorMessage}</div>;
    if (lat && month) {
      if (this.inNorthernHemisphere(lat)) {
        if (3 <= month && month <= 10) {
          return <div>Let's hit the beach!</div>;
        } else {
          return <div>Burr, it's chilly!</div>;
        }
      } else {
        if (3 <= month && month <= 10) {
          return <div>Burr, it's chilly</div>;
        } else {
          return <div>Let's hit the beach!</div>;
        }
      }
    }
    return <div>Loading...</div>;
  }
}

export default App;

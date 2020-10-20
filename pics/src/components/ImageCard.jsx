import React, { Component } from 'react';

export default class ImageCard extends Component {
  state = { spans: 0 };

  imageRef = React.createRef();

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const rowHeight = 10;
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / rowHeight);
    this.setState({ spans });
  };

  render() {
    const { alt_description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img src={urls.regular} alt={alt_description} ref={this.imageRef} />
      </div>
    );
  }
}

import React, { Component } from 'react';

const styles = {
  textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
};

class Loading extends Component {
  props: {
    text: string,
    speed: number,
  };
  static defaultProps = {
    text: 'Loading...',
    speed: 300,
  };
  state = { text: this.props.text };
  componentDidMount() {
    const stopper = `${this.props.text}....`;
    this.interval = window.setInterval(
      () =>
        this.state.text === stopper
          ? this.setState(() => ({ text: this.props.text }))
          : this.setState(prevState => ({ text: `${prevState.text}.` })),
      this.props.speed
    );
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    return (
      <div style={styles}>
        {this.state.text}
      </div>
    );
  }
}

export default Loading;

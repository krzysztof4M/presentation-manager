import React, { Component } from 'react';

export default function timer(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        elapsedTime: 0
      };
    }

    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState(({ elapsedTime }) => ({ elapsedTime: elapsedTime + 1 }))
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      const { elapsedTime } = this.state;

      return <WrappedComponent elapsedTime={elapsedTime} />;
    }
  };
}

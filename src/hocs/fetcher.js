import React, { Component } from 'react';

const fetcher = (
  load,
  dataPropName = 'name'
) => WrappedComponent => {
  class Fetcher extends Component {
    state = {
      loading: true,
      data: null
    }

    componentDidMount() {
      return load(this.props)
        .then(res => {
          this.setState({
            loading: false,
            data: res
          })
        })
    }

    render() {
      const { data, loading } = this.state;
      const dynamicProp = {
        [dataPropName]: {
          data,
          load: () => {
            return load(this.props)
            .then(res => {
              this.setState({
                loading: false,
                data: res
              })
            })
          },
          loading
        }
      };

      return (
        <WrappedComponent {...this.props} {...dynamicProp} />
      );
    }
  }
  return Fetcher;
}

export default fetcher;

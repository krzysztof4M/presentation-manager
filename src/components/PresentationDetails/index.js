import React, { Component } from 'react';
import { compose } from 'recompose';
import fetcher from '../../hocs/fetcher';
import loader from '../../hocs/loader';
import { load, save, update } from './actions';
import View from './View';

class PresentationDetails extends Component {
  addSlide = (data) => {
    const { data: { data: { id }, load }} = this.props;
    return save(id, data)
      .then(() => load());
  }

  updateSlide = (slideId, data) => {
    const { data: { data: { id }, load }} = this.props;
    return update(id, slideId, data)
      .then(() => load());
  }

  render() {
    const { data: { data: { id, name, slides }}} = this.props;

    return (
      <View
        addSlide={this.addSlide}
        id={id}
        name={name || 'Empty name'}
        presenterModeEnabled={!!slides.length}
        slides={slides}
        updateSlide={this.updateSlide}
      />
    );
  }
}

export default compose(
  fetcher(load, 'data'),
  loader(props => {
    return props.data.loading
  }),
)(PresentationDetails);

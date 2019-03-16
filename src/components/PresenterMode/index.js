import React, { Component } from 'react';
import { compose } from 'recompose';
import PresenterModeView from './View.js';
import fetcher from '../../hocs/fetcher';
import loader from '../../hocs/loader';
import load from './load';

class PresenterMode extends Component {
  state = {
    currentSlideIndex: 0
  }

  handleClickNext = () => {
    if (this.state.currentSlideIndex === this.props.data.data.slides.length) return;
    this.setState(({ currentSlideIndex }) => ({ currentSlideIndex: currentSlideIndex + 1 }));
  }

  handleClickPrevious = () => {
    if (this.state.currentSlideIndex === 0) return;
    this.setState(({ currentSlideIndex }) => ({ currentSlideIndex: currentSlideIndex - 1 }))
  }

  render() {
    const { currentSlideIndex } = this.state;
    const { data: { data: { name, slides }}} = this.props;

    const currentSlide = slides[currentSlideIndex];
    const nextSlide = currentSlideIndex + 1 > slides.length ? null : slides[currentSlideIndex + 1];
    const previousSlide = currentSlideIndex - 1 < 0 ? null : slides[currentSlideIndex - 1];

    return (
      <PresenterModeView
        name={name}
        currentSlide={currentSlide}
        handleClickNext={this.handleClickNext}
        handleClickPrevious={this.handleClickPrevious}
        nextSlide={nextSlide}
        previousSlide={previousSlide}
        slides={slides}
      />
    );
  }
}

export default compose(
  fetcher(load, 'data'),
  loader(props => props.data.loading)
)(PresenterMode);

import React, { Component } from 'react';
import formatNote from '../../utils/formatNote';
import SlideForm from './SlideForm';
import styles from './Slide.module.css';

export default class Slide extends Component {
  state = {
    edit: false
  }

  handleToggleEdit = () => {
    this.setState(({ edit }) => ({ edit: !edit }));
  }

  handleSubmit = (data) => {
    const { id, updateSlide } = this.props;

    return updateSlide(id, data)
      .then(() => this.handleToggleEdit());
  }

  render() {
    const { notes, slides, text } = this.props;
    const { edit } = this.state;

    if (edit) return (
      <SlideForm
        notes={notes}
        secondaryBtnFunc={this.handleToggleEdit}
        secondaryBtnLabel="Cancel"
        slides={slides}
        submitButtonLabel="Edit slide"
        onSubmit={this.handleSubmit}
        text={text}
      />
    );

    return (
      <div className={styles.slideContainer}>
        <div className={styles.slide}>
          <p>{text}</p>
        </div>
        <div className={styles.notes}>
          <h4>Notes:</h4>
          <div className={styles.notes}>{formatNote(notes, slides)}</div>
        </div>
        <a className={styles.hoverArea} onClick={this.handleToggleEdit}>Edit</a>
      </div>
    );
  }
}

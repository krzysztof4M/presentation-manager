import React, { Component } from 'react';
import Form from './Form';

export default class AddSlide extends Component {
  state = {
    notes: this.props.notes || '',
    text: this.props.text || ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChangeNotes = (event, newValue) => {
    this.setState({ notes: newValue });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { notes, text } = this.state;

    return this.props.onSubmit({ notes, text });
  }

  render() {
    const { notes, text } = this.state;
    const { slides, secondaryBtnFunc, secondaryBtnLabel, submitButtonLabel } = this.props;

    return (
      <Form
        data={slides.map(({ id, position }) => ({ id, display: `@slide${position}`}))}
        handleChange={this.handleChange}
        handleChangeNotes={this.handleChangeNotes}
        handleSubmit={this.handleSubmit}
        notes={notes}
        secondaryBtnFunc={secondaryBtnFunc}
        secondaryBtnLabel={secondaryBtnLabel}
        submitButtonLabel={submitButtonLabel}
        text={text}
      />
    );
  }
}

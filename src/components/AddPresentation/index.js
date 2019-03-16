import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Form from './Form';
import save from './save';

class AddPresentation extends Component {
  state = {
    name: ''
  }

  changeName = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const { history: { push } } = this.props;
    return save({ name })
      .then(() => push('/presentations'));
  }
  
  render() {
    const { name } = this.state;

    return (
      <div className="content">
        <Form name={name} handleChange={this.changeName} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default withRouter(AddPresentation);

import React from 'react';
import styles from './Form.module.css';

export default function Form(props) {
  const { name, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}> 
      <label>Presentation name</label>
      <input className={styles.textInput} value={name} onChange={handleChange} />
      <button className="button" disabled={!name} type="submit">Add new presentation</button>
    </form>
  )
}

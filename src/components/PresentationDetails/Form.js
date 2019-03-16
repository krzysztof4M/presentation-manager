import React from 'react';
import { MentionsInput, Mention } from 'react-mentions'
import styles from './Form.module.css';

export default function Form(props) {
  const {
    data, handleChange, handleChangeNotes, handleSubmit, notes, secondaryBtnFunc, secondaryBtnLabel, submitButtonLabel, text
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>Slide text</label>
      <input className={styles.textInput} name="text" onChange={handleChange} value={text} />
      <label>Slide notes</label>
      <MentionsInput value={notes} onChange={handleChangeNotes}>
        <Mention
          trigger="@"
          data={data}
        />
      </MentionsInput>
      <div className={styles.buttons}>
        <button className={`${styles.formBtn} button`} disabled={!text} type="submit">{submitButtonLabel}</button>
        {secondaryBtnLabel && <button className={`${styles.formBtn} button`} onClick={secondaryBtnFunc} type="button">{secondaryBtnLabel}</button>}
      </div>
    </form>
  );
}

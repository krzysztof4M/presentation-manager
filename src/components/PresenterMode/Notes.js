import React from 'react';
import formatNote from '../../utils/formatNote';
import styles from './Notes.module.css';

export default function Notes(props) {
  const { note, slides } = props;

  return (
    <div className={styles.notes}>
      <h3>Presenter notes:</h3>
      <p>{formatNote(note, slides)}</p>
    </div>
  );
}

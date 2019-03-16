import React from 'react';
import styles from './Slide.module.css';

export default function Slide(props) {
  const { text } = props;

  return (
    <div className={styles.slide}>
      {text}
    </div>
  );
}

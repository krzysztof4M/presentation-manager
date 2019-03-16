import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function AddButton() {
  return (
    <Link className={styles.addButton} to="/presentations/new">
      <i>+</i>
      <h2>
        Add new presentation
      </h2>
    </Link>
  );
}

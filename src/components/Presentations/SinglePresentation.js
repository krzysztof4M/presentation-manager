import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function SinglePresentation(props) {
  const { id, name } = props;
  
  return (
    <div className={styles.presentation}>
      <div className={styles.body}>
        {name}
      </div>
      <div className={styles.footer}>
        <Link className="button" to={`/presentations/${id}`}>Details</Link>
      </div>
    </div>
  );
}

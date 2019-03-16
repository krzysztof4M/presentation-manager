import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function Menu() {
  return (
    <div className={`container ${styles.menuContainer}`}>
      <ul className={styles.menu}>
        <li>
          <Link className={styles.menuLink} to="/">Home</Link>
        </li>
        <li>
          <Link className={styles.menuLink} to="/presentations">My Presentations</Link>
        </li>
      </ul>
    </div>
  )
}

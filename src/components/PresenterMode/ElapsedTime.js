import React from 'react';
import timer from '../../hocs/timer';
import secToMinAndSec from '../../utils/secToMinAndSec';
import styles from './ElapsedTime.module.css';

function ElapsedTime({ elapsedTime }) {
  return (
    <div className={styles.elapsedTime}>
      <h3>Time elapsed</h3>
      <span className={styles.time}>{secToMinAndSec(elapsedTime)}</span>
    </div>
  );
}

export default timer(ElapsedTime);

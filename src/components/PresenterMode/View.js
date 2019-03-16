import React from 'react';
import Notes from './Notes';
import Slide from './Slide';
import ElapsedTime from './ElapsedTime';
import styles from './View.module.css';

function PresenterModeView(props) {  
  const { name, currentSlide, handleClickNext, handleClickPrevious, nextSlide, previousSlide, slides } = props;

  return (
    <div className="content">
      <div className={styles.header}>
        <h1>{name}</h1>
        <ElapsedTime />
      </div>
      <div className={styles.slidesWrapper}>
        <div className={styles.smallSlideWrapper}>
          <a className={styles.previousArrow} onClick={handleClickPrevious}>{'<'}</a>
          <div className={styles.smallSlide}>
            {previousSlide && <Slide text={previousSlide.text} />}
          </div>
        </div>
        <div className={styles.currentSlide}>
          <Slide text={currentSlide.text} />
          <Notes note={currentSlide.notes} slides={slides} />
        </div>
        <div className={styles.smallSlideWrapper}>
          <a className={styles.nextArrow} onClick={handleClickNext}>{'>'}</a>
          <div className={styles.smallSlide}>
            {nextSlide && <Slide text={nextSlide.text} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresenterModeView;

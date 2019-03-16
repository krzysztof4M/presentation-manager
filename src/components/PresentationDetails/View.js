import React from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide';
import SlideForm from './SlideForm';
import styles from './View.module.css';

export default function View(props) {
  const { addSlide, id, name, presenterModeEnabled, slides, updateSlide } = props;

  return (
    <div className="content">
      <div className={styles.header}>
        <h1>{name}</h1>
        {presenterModeEnabled > 0 && <Link className="button" to={`/presentations/${id}/mode`}>Presenter mode</Link>}
      </div>
      <div className={styles.slidesContainer}>
        {
          slides.map(({ id, notes, text }) => {
            return (
              <Slide
                key={id}
                id={id}
                notes={notes}
                slides={slides}
                updateSlide={updateSlide}
                text={text}
              />
            );
          })
        }
        <SlideForm
          onSubmit={addSlide}
          submitButtonLabel="Add new slide"
          slides={slides}
        />
      </div>
    </div>
  );
}

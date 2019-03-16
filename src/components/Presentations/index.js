import React from 'react';
import { compose } from 'recompose';
import SinglePresentation from './SinglePresentation';
import AddButton from './AddButton';
import styles from './index.module.css';
import fetcher from '../../hocs/fetcher';
import loader from '../../hocs/loader';
import load from './load';

function Presentations(props) {
  const { data: { data: presentations } } = props;


  return (
    <div className="content">
      <h1>My Presentations</h1>
      <div className={styles.presentationsContainer}>
        <AddButton />
        {
          presentations.map(({ id, name }) => <SinglePresentation key={id} id={id} name={name} />)
        }
      </div>
    </div>
  )
}

export default compose(
  fetcher(load, 'data'),
  loader(props => props.data.loading)
)(Presentations)

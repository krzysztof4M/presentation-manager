import React from 'react';

export default function formatNote(text, objects) {
  if (!text) return;
  
  return (<span>
    {
      text.split(/(@\[@[\w]*?\]\([0-9]*?\))/g)
      .reduce((prev, current, i) => {
        if (!i) {
          return [current];
        }
        return prev.concat(
          /(@\[@[\w]*?\]\([0-9]*?\))/g.test(current) ? <Mention key={i + current} current={current} objects={objects}/> : current
        )
      }, [])
    }
  </span>);
};

function Mention({ current, objects }) {
  const id = current.match(/\(\d+\)/g)[0].slice(1,-1);
  const { position } = objects.find(object => object.id === parseInt(id)) || {}; 

  return (
    <b>{`@slide${position}`}</b>
  );
}

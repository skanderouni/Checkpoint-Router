import { Button } from '@material-ui/core';
import React from 'react';
import Movies from '../Movie/Movies';
import './Description.css';
const Description = ({
  location: {
    state: { oneMovie },
  },
  history,
}) => {
  console.log(history);
  return (
    <div className='description'>
      <h1>{oneMovie.name}</h1>
      <h3>{oneMovie.description}</h3>
      <Movies oneMovie={oneMovie} />
      <Button onClick={() => history.goBack(-1)}>Go Back</Button>
      <iframe
        className='trailer'
        width='600'
        height='600'
        src={oneMovie.trailer}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Description;

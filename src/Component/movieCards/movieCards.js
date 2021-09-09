import React from 'react';
import Movies from '../Movie/Movies';
import './movieCards.css';

const movieCard = ({ oneMovie, searchItem }) => {
  return (
    <div className='help'>
      {oneMovie

        .filter((el) => el.name.toLowerCase().includes(searchItem))

        .map((el) => (
          <Movies oneMovie={el} key={el.id} />
        ))}
    </div>
  );
};

export default movieCard;

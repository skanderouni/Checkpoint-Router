import React from 'react';
import './Movies.css';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const Movies = ({
  oneMovie: { name, image, date, type, rating, description, trailer, id },
}) => {
  return (
    <div class='wrapper'>
      <div class='main_card'>
        <div class='card_left'>
          <div class='card_datails'>
            <h1>{name}</h1>
            <div class='card_cat'>
              <ul>
                <li>{date}</li>
                <li>|| </li>
                <li>{type}</li>
              </ul>
              <p class='rating'>{rating}</p>
            </div>
            <p class='disc'>{description}</p>
            <a href='https://www.imdb.com/title/tt4912910/' target='_blank'>
              Read More
            </a>
            <Box component='fieldset' mb={3} borderColor='transparent'>
              <Typography component='legend'></Typography>
              <Rating name='read-only' value={rating} readOnly />
            </Box>
            <div class='card_left_button'>
              <Link
                to={{
                  pathname: `/description/${id}`,
                  state: {
                    oneMovie: {
                      name,
                      image,
                      date,
                      type,
                      rating,
                      description,
                      trailer,
                      id,
                    },
                  },
                }}
              >
                WATCH TRAILER
              </Link>
            </div>
          </div>
        </div>

        <div class='card_right'>
          <div class='img_container'>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;

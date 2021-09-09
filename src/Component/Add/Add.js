import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Add({ addMovie }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(1);
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [trailer, setTrailer] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <form style={modalStyle} className={classes.paper}>
      <label>name</label>
      <input onChange={(e) => setName(e.target.value)} />
      <br />
      <label>description</label>
      <input onChange={(e) => setDescription(e.target.value)} />
      <br />
      <label>rating</label>
      <input
        onChange={(e) => setRating(e.target.value)}
        type='number'
        min='1'
        max='5'
      />
      <br />
      <label>type</label>
      <input onChange={(e) => setType(e.target.value)} />
      <br />
      <label>date</label>
      <input onChange={(e) => setDate(e.target.value)} />
      <br />
      <label>image</label>
      <input onChange={(e) => setImage(e.target.value)} />
      <br />
      <label>trailer</label>
      <input onChange={(e) => setTrailer(e.target.value)} />
      <br />
      <Button
        onClick={(e) => {
          e.preventDefault(
            addMovie({ name, description, rating, type, date, image })
          );
          handleClose();
        }}
      >
        Submit
      </Button>
    </form>
  );

  return (
    <div>
      <button
        type='button'
        onClick={handleOpen}
        style={{ fontSize: 40, color: 'black', position: 'fixed' }}
      >
        +
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
}

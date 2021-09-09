import './App.css';
import Navbar from './Component/Navbar/Navbar';
import MovieCard from './Component/movieCards/movieCards';
import Footer from './Component/Footer/Footer';
import Add from './Component/Add/Add';
import Description from './Component/Description/Description';
import { moviesData } from './constant/Data';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [oneMovie, setOneMovie] = useState(moviesData);
  const [searchItem, setSearchItem] = useState('');
  const [searchRating, setSearchRating] = useState(1);
  const addMovie = (newMovie) => setOneMovie([newMovie, ...oneMovie]);
  return (
    <div>
      <Navbar
        setSearchItem={setSearchItem}
        setSearchRating={setSearchRating}
        searchRating={searchRating}
      />
      <div
        style={{ display: 'flex', alignContent: 'flex-start', marginTop: '5%' }}
      >
        <Switch>
          <Route exact path='/'>
            <Add addMovie={addMovie} />
            <MovieCard oneMovie={oneMovie} searchItem={searchItem} />
          </Route>
          <Route
            path='/description/:id'
            render={(props) => <Description {...props} oneMovie={oneMovie} />}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;

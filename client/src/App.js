import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieCard from './Movies/Movie';
import MovieList from './Movies/MovieList';

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); 
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') 
        .then(response => {
          setMovieList(response.movie.id)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div><Route exact path ='/movielist'  />
      <Route exact path = '/movielist/movies/' /> 
      <MovieList /></div>
    </div>
  );
}

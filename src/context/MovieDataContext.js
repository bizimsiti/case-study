import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const MovieDataContext = createContext(null);

export const MovieDataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const fetchMovies = (search) => {
    axios(`${API_ENDPOINT}&s=${search}`).then((res) =>
      setMovies(res.data.Search)
    );
  };

  // add and remove favorite movies
  const addFavoriteMovie = (movie) => {
    movie.isFavorite = true;
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
  };
  const removeFavoriteMovie = (movie) => {
    movie.isFavorite = false;
    const newFavoriteList = favorites.filter(
      (fav) => fav.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
  };

  //which movie selected for favorite
  const favoriteHandler = (movie) => {
    if (favorites.includes(movie)) {
      removeFavoriteMovie(movie);
    } else {
      addFavoriteMovie(movie);
    }
  };
  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  const values = {
    movies,
    setSearch,
    favoriteHandler,
    favorites
  };
  return (
    <MovieDataContext.Provider value={values}>
      {children}
    </MovieDataContext.Provider>
  );
};

export default MovieDataContext;

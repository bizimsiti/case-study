import React from "react";
import styles from "./styles.module.css";
import Card from "../Card";
import { useContext } from "react";
import MovieDataContext from "../../context/MovieDataContext";

function MoviesContent() {
  const { movies, favoriteHandler } = useContext(MovieDataContext);

  return (
    <div className={styles.moviesContainer}>
      {movies?.map((movie, i) => (
        <Card
          movie={movie}
          key={i}
          isFavorite={movie.isFavorite}
          addFavorite={() => favoriteHandler(movie)}
        />
      ))}
    </div>
  );
}

export default MoviesContent;

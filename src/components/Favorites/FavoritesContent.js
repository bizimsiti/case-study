import React from "react";
import styles from "./styles.module.css";
import { useContext } from "react";
import MovieDataContext from "../../context/MovieDataContext";
import Card from "../Card";

function FavoritesContent() {
  const { favorites, favoriteHandler } = useContext(MovieDataContext);

  return (
    <div className={styles.container}>
      {favorites.length > 0 ? (
        favorites?.map((movie, i) => (
          <Card
            movie={movie}
            key={i}
            isFavorite={movie.isFavorite}
            addFavorite={() => favoriteHandler(movie)}
          />
        ))
      ) : (
        <div className={styles.noFavorites}>
          <p>No Favorites</p>
        </div>
      )}
    </div>
  );
}

export default FavoritesContent;

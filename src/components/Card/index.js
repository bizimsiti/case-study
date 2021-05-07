import React from "react";
import styles from "./styles.module.css";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import noimg from "../../assets/no-image.jpg";
function Card({ movie, isFavorite, addFavorite }) {
  return (
    <div className={styles.card}>
      <div className={styles.favoriteIcon} onClick={addFavorite}>
        {isFavorite ? (
          <MdFavorite style={{ fontSize: "2rem" }} color="#ffcc29" />
        ) : (
          <MdFavoriteBorder style={{ fontSize: "2rem" }} color="#ffcc29" />
        )}
      </div>
      <div className={styles.cardImg}>
        {movie.Poster !== "N/A" ? (
          <img src={movie.Poster} alt="" />
        ) : (
          <img src={noimg} style={{ width: "200px" }} alt="" />
        )}
      </div>
      <div className={styles.cardBody}>
        <h4>Name</h4>
        <p>{movie.Title}</p>
        <h4>Year</h4>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

export default Card;

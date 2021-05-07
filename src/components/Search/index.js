import { useContext } from "react";
import styles from "./styles.module.css";
import { IoMdSearch } from "react-icons/io";
import MovieDataContext from "../../context/MovieDataContext";
function Search() {
  const { setSearch } = useContext(MovieDataContext);
  const handleSearch = (e) => {
    if (e.charCode === 13) {
      setSearch(e.target.value);
    }
  };
  return (
    <div className={styles.container}>
      <h2>Search Movie</h2>
      <div className={styles.inputWrapper}>
        <IoMdSearch style={{ fontSize: "1.5rem" }} />
        <input
          type="text"
          placeholder="Enter the movie name..."
          onKeyPress={handleSearch}
        />
      </div>
    </div>
  );
}

export default Search;

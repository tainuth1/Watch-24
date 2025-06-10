import MovieCard from "../components/MovieCard";
import "./FavoriteMovie.css";
const Favorite = () => {
  const movies = JSON.parse(localStorage.getItem("favorite"));

  return (
    <div className="favContainer">
      <h2>My Favorite Movies</h2>
      <div className="fav-movie-container">
        {movies.map((movie) => (
          <MovieCard movie={movie}/>
        ))}
      </div>
    </div>
  );
};

export default Favorite;

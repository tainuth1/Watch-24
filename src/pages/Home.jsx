import React, { useEffect, useState } from "react";
import "./home.css";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=1d4fca46febab8295014ed7cfb3a54fd"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch movie");
      }
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="home-container">
      <div className="movies">
        <div className="header">
          <h2>Popular Movies</h2>
          <select>
            <option value="">All</option>
            <option value="">Advancrture</option>
            <option value="">Action</option>
            <option value="">Cartoon</option>
          </select>
        </div>

        <div className="movies-container">
          {movies.map((mv)=>(
            <MovieCard key={mv.id} movie={mv} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

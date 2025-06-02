import React from "react";
import "./home.css";
import MovieCard from "../components/MovieCard";

const Home = () => {
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
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default Home;

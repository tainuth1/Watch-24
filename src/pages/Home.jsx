import React, { useEffect, useState } from "react";
import "./home.css";
import MovieCard from "../components/MovieCard";
import { Link, useSearchParams } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [searchParam] = useSearchParams();
  const page = searchParam.get("page") || 1;
  const [current, setCurrentPage] = useState(parseInt(page));

  const search = searchParam.get("search") || "";

  const getMovie = async () => {
    const query = search
      ? `https://api.themoviedb.org/3/search/movie?api_key=1d4fca46febab8295014ed7cfb3a54fd&query=${search}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=1d4fca46febab8295014ed7cfb3a54fd&page=${current}`;

    try {
      const res = await fetch(query);

      if (!res.ok) {
        throw new Error("Failed to fetch movie");
      }
      const data = await res.json();
      setTotalPage(data.total_pages);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [current, search]);

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
          {movies.map((mv) => (
            <MovieCard key={mv.id} movie={mv} />
          ))}
        </div>

        <div className="pagination">
          {current < 2 ? (
            <button
              disabled={current < 2}
              onClick={() => setCurrentPage(current - 1)}
              className="p-btn"
            >
              Previous
            </button>
          ) : (
            <Link
              to={`?page=${current - 1}`}
              disabled={current < 2}
              onClick={() => setCurrentPage(current - 1)}
              className="p-btn"
            >
              Previous
            </Link>
          )}
          <span>
            Page {current} of {totalPage} Pages
          </span>
          <Link
            to={`?page=${current + 1}`}
            onClick={() => setCurrentPage(current + 1)}
            className="n-btn"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

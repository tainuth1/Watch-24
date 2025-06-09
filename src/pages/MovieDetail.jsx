import { useParams, useSearchParams } from "react-router-dom";
import "./movieDetail.css";
import { useEffect, useState } from "react";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMoviewDetail] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchMovieDeatail = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=1d4fca46febab8295014ed7cfb3a54fd`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch deatail");
      }
      const data = await res.json();
      setMoviewDetail(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDeatail();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <div className="banner">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="container-movie">
        <div className="poster-detail">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            alt=""
          />
        </div>
        <div className="detail">
          <h2>{movieDetail.original_title}</h2>
          <div className="rate">
            <span>
              <i class="bx bxs-star"></i> {movieDetail.vote_average?.toFixed(1)}
            </span>
            <p>{movieDetail.release_date}</p>
            <p>{movieDetail.runtime}m</p>
          </div>
          <div className="category">
            {/* {movieDetail.genres.map((gen) => (
              <span key={gen.id}>{gen}</span>
            ))} */}
          </div>
          <h3>Overview</h3>
          <p>{movieDetail.overview}</p>
          <div className="btns">
            <button className="btn">Watch Trailer</button>
            <button className="btn">Watch Movie</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

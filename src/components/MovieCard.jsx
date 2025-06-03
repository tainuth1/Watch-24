import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
        <div className="movie-image">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        </div>
        <div className="movie-detail">
            <div className="">
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
            </div>
            <span>
                <i className='bx bxs-star'></i> {movie.vote_average.toFixed(1)}
            </span>
        </div>
    </div>
  )
}

export default MovieCard

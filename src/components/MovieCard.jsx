import React from 'react'

const MovieCard = () => {
  return (
    <div className="movie-card">
        <div className="movie-image">
            <img src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/jYfMTSiFFK7ffbY2lay4zyvTkEk.jpg" alt="" />
        </div>
        <div className="movie-detail">
            <div className="">
                <h2>Movie title</h2>
                <p>10-10-2005</p>
            </div>
            <span>
                <i class='bx bxs-star'></i> 7.7
            </span>
        </div>
    </div>
  )
}

export default MovieCard

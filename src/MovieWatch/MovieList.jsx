import React from 'react'
import MovieItem from './MovieItem'
import PropTypes from 'prop-types'

const MovieList = ({movies, rateMovie, toggledWatch, deleteMovie}) => {
  return (
    <div className='mt-4'>
        { movies.length === 0 ? (
          <p className='text-center text-gray-400'>
            No movies in your Wishlist. Please Add!!
          </p>
        ) : (
          <ul className='space-y-3'>
            {
              movies.map( (movie) => (
                <MovieItem 
                key={movie.id}
                movie={movie}
                rateMovie ={rateMovie}
                toggledWatch={toggledWatch}
                deleteMovie={deleteMovie}
                />
              ))
            }
          </ul>
        )

        }
    </div>
  )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            ott: PropTypes.string.isRequired,
            watched: PropTypes.bool.isRequired,
            rating: PropTypes.number,
        })
    ).isRequired,
    rateMovie: PropTypes.func.isRequired,
    toggleWatched: PropTypes.func.isRequired,
    deleteMovie: PropTypes.func.isRequired,
};
export default MovieList
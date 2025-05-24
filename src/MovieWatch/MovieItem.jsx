import React from 'react'
import ReactStars from 'react-stars'
import PropTypes from 'prop-types'

const MovieItem = ({
  movie, 
  rateMovie, 
  toggledWatch, 
  deleteMovie,
 }) => {

  const ratingChange = (newRating) => {
    rateMovie(movie.id, newRating)
  }


  return (
    
    <li className='flex justify-between items-center p-3 bg-gray-800 rounded-lg shadow-md'>
      <span 
      className={`flex-1 mr-4 ${
        movie.watched ? "line-through text-gray-400" : "text-white"
      }` }>
        {movie.title} on {movie.ott} {movie.rating && ` ⭐ ${movie.rating}/5`}
      </span>

      <div className='flex gap-2'>

            <ReactStars
              count={5}
              value={movie?.rating}
              onChange={ratingChange}
              size={24}
              color2='#ffd700'
            />

            <button className='px-2 text-sm bg-green-600 hover:bg-green-500 cursor-pointer text-white rounded-md'
            onClick={() => toggledWatch(movie.id)}
            handleFilter= { () => setFilter(movie.id)}
            >
              {movie.watched ? "Unwatch" : "Watched"}
            </button>

            <button 
            className='px-2 text-sm bg-red-600 hover:bg-red-500 cursor-pointer text-white rounded-md'
            onClick={ () => deleteMovie(movie.id)}
            >
              Remove
            </button>

      </div>
    </li>

  )
}

MovieItem.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        ott: PropTypes.string.isRequired,
        rating: PropTypes.number,
        watched: PropTypes.bool.isRequired,
    }).isRequired,
    rateMovie: PropTypes.func.isRequired,
    toggleWatched: PropTypes.func.isRequired,
    deleteMovie: PropTypes.func.isRequired,
};
export default MovieItem

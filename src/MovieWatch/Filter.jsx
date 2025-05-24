import React from 'react'

const Filter = ({movies, allMovie, showWatched}) => {

  return (
    <div className='flex gap-3 items-center'>
      <button className='bg-gray-200 rounded-sm text-center text-black p-1 w-16'
      onClick={ () => {movies.id}}
      >All</button>
      <button className='bg-gray-200 rounded-sm text-center text-black p-1'>Watched</button>
      <button className='bg-gray-200 rounded-sm text-center text-black p-1'>Unwatch</button>
    </div>
  )
}

export default Filter
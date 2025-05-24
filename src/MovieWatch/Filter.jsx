import PropTypes from "prop-types";
import React from 'react'

const Filter = ({setFilter}) => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-3 mb-4">
      <button
      onClick={() => setFilter("all")}
      className="px-3 py-2 bg-gray-700 cursor-pointer hover:bg-gray-600 text-white rounded"
      >
        All
      </button>
      <button
      onClick={() => setFilter("watched")}
      className="px-3 py-2 bg-gray-700 cursor-pointer hover:bg-gray-600 text-white rounded"
      >
        Watched
      </button>
      <button
      onClick={() => setFilter("unwatched")}
      className="px-3 py-2 bg-gray-700 cursor-pointer hover:bg-gray-600 text-white rounded"
      >
        Unwatched
      </button>
    </div>
  )
}

Filter.propTypes = {
    setFilter: PropTypes.func.isRequired,
};
export default Filter
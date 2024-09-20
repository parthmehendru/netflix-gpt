import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({title, movies}) => {
    // console.log(movies);
  return (
    <div className='md:px-4 py-1'>
        <h2 className='font-semibold md:text-3xl text-lg mb-4 text-white'>{title}</h2>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} backdropPath = {movie.title} id={movie.id}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList

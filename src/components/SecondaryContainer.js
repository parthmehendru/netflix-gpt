import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
  return (
    movies.nowPlayingMovies  && (
    <div className='bg-black'>
        <div className='md:-mt-40 -mt-56 md:pl-12 pl-2 relative z-20 bg-transparent'>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
            <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
        </div>
       
    </div>
    )
  )
}

export default SecondaryContainer

import React from 'react'
import { useSelector } from 'react-redux'
import ShimmerContainer from './ShimmerContainer';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
    const {movieResults, movieNames, loading} = useSelector(store => store.gpt);

    if(loading===1){
        return <ShimmerContainer />
    }

    if(loading===2){
        return (
            <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
              <div>
                {movieNames.map((movie, index) => <MovieList key={movie} title={movie} movies = {movieResults[index]} />)}
              </div>
            </div>
          )
    }
  
}

export default GptMovieSuggestions

import React from 'react'
import Header from './Header';
import { useSelector } from 'react-redux';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';

const Browse = () => {
  const gpt = useSelector((store) => store.gpt);

   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();

  return (
    <div>
      <Header />
      {gpt.showGptSearch ? <GptSearch /> : 
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
       }
     
      {
       
        /*
           MainContainer
            - VideoBackground
            - VideoTitle
           SecondaryContainer
            - MovieList * n
               - cards * n





        */

      }
    </div>
  )
}

export default Browse;

import React from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_OPTIONS } from '../utils/constants'
import model from '../utils/openai'
import { addGptMovieResult, toggleLoading } from '../utils/gptSlice'

const GptSearchBar = () => {
    const configlang = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const navigate = useNavigate()
    const dispatch = useDispatch();
  
   
    // search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        return json.results;
    }


    const handleGptSearchClick = async () => {
        dispatch(toggleLoading(1));
        const query = searchText.current?.value;
        let gptQuery;
        // Check if the input is empty
        if (!query || query.trim() === "") {
            gptQuery = "Act as a Movie Recommendation system and suggest some top trending movies. Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Platform, Koi Mil Gaya"
        }
        else{
            gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query " + searchText.current?.value + ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Platform, Koi Mil Gaya. If the query itself is a movie name, then the results must contain that movie and other movies must be similar to that movie. If the query is containing neither a movie name, nor some genre, mood, and the query contains random words or characters, then just give the trending movie names starting from those characters or words given to you as query. If the query contains name of an actor or actress, then give the top 5 hit movies of that actor or actress. Don't give any excuse, you have to give the movie names anyhow.";
        }

        try {const gptResults = await model.generateContent(gptQuery);

            const gptText = gptResults.response.text();

            console.log(gptText);

            const gptMovies = gptText.split(",").map(movie => movie.trim());

            const promiseArray = gptMovies.map( movie => searchMovieTMDB(movie));
            // array of promises will come

            const tmdbResults = await Promise.all(promiseArray);
            console.log(tmdbResults);

            dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));


            dispatch(toggleLoading(2));
            // console.log(data);
            // For each movie, search TMDB API for all 5 movies
    
    } catch(err){
        navigate("/gpterror", { state: { errorMessage: err.message || "An unexpected error occurred!" } });

        }

        
    };
    
  return (
    <>
        <div className='mt-24 flex'>
        <form className='grid mx-auto grid-cols-12 bg-black rounded-md w-full md:w-1/2' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type="text" className='p-4 m-4 col-span-9 rounded-md' placeholder={lang[configlang]?.gptSearchPlaceholder}/>
            <button className='m-4 bg-red-600 col-span-3 text-white rounded-md' onClick={handleGptSearchClick}>{lang[configlang]?.search}</button>
        </form>
        </div>
    </>
    
  )
}

export default GptSearchBar;

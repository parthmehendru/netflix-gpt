import { useEffect, useCallback } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { useNavigate } from 'react-router-dom';


const usePopularMovies = ()=> {
    const  navigate = useNavigate();
     // Fetch Data from TMDB API and update Store
     const dispatch = useDispatch();
     const popularMovies = useSelector(store => store.movies.popularMovies);


     const getPopularMovies = useCallback(async ()=> {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
            const json = await data.json();
            console.log(json.results);
            dispatch(addPopularMovies(json.results));
            
       
        } catch (error) {
            console.error("Error fetching now playing movies: ", error);
            // Redirect to error page on any error
            navigate('/error');
        }
    }, [dispatch, navigate]);
         
 
     useEffect(()=> {
        if(!popularMovies) getPopularMovies();
     }, [getPopularMovies, popularMovies])
}

export default usePopularMovies;
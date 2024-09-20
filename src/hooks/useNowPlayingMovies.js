import { useEffect, useCallback } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useNavigate } from 'react-router-dom';

const useNowPlayingMovies = ()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const getNowPlayingMovies = useCallback(async ()=> {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
            const json = await data.json();
            console.log(json.results);
            dispatch(addNowPlayingMovies(json.results));
        } catch (error) {
            console.error("Error fetching now playing movies: ", error);
            // Redirect to error page on any error
            navigate('/error');
        }
    }, [dispatch, navigate]);

    useEffect(()=> {
        if(!nowPlayingMovies) getNowPlayingMovies();
    }, [getNowPlayingMovies, nowPlayingMovies])
}

export default useNowPlayingMovies;

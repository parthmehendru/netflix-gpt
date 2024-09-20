import { useEffect, useCallback } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { useNavigate } from 'react-router-dom';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);


    const getTopRatedMovies = useCallback(async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
            const json = await data.json();
            console.log(json.results);
            dispatch(addTopRatedMovies(json.results));
        } catch (error) {
            console.error("Error fetching top rated movies: ", error);
            // Redirect to the error page on any error
            navigate('/error');
        }
    }, [dispatch, navigate]);

    useEffect(() => {
        if(!topRatedMovies) getTopRatedMovies();
    }, [getTopRatedMovies, topRatedMovies]);
}

export default useTopRatedMovies;

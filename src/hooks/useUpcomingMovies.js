import { useEffect, useCallback } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';
import { useNavigate } from 'react-router-dom';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

    const getUpcomingMovies = useCallback(async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
            const json = await data.json();
            console.log(json.results);
            dispatch(addUpcomingMovies(json.results));
        } catch (error) {
            console.error("Error fetching upcoming movies: ", error);
            // Redirect to the error page if fetching fails
            navigate('/error');
        }
    }, [dispatch, navigate]);

    useEffect(() => {
        if(!upcomingMovies) getUpcomingMovies();
    }, [getUpcomingMovies, upcomingMovies]);
}

export default useUpcomingMovies;

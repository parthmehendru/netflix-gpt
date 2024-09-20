import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const useMovieTrailer = (movieId) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [trailerId, setTrailerId] = useState(null);
    // fetch trailer video
    const trailerVideo = useSelector(store => store.movies.trailerVideo);


    const getMovieVideos = useCallback(async ()=> {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
            const json = await data.json();
            // console.log(json);

            const trailers = json.results.filter((video) => video.type === "Trailer" && video.name === "Official Trailer");
            const trailer = trailers.length ? trailers[0] : json.results[0];
            // console.log(trailer);
            dispatch(addTrailerVideo(trailer));
        } catch (error) {
            console.error("Error fetching now playing movies: ", error);
            // Redirect to error page on any error
            navigate('/error');
        }
        
        // setTrailerId(trailer.key)
    }, [movieId, dispatch, navigate])

    useEffect(()=> {
        if(!trailerVideo) getMovieVideos();
    }, [getMovieVideos, trailerVideo])
  
}

export default useMovieTrailer;

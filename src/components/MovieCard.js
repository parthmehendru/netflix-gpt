import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { API_OPTIONS } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({posterPath, backdropPath, id}) => {

  const navigate = useNavigate();

  const showTrailer = async (id)=> {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS)
      const data = await  response.json();
      console.log(data);

      const results = data.results;
      let filteredResults = results.filter(result => result.type === "Trailer");
      if(filteredResults.length === 0){
        filteredResults = results.filter(result => result.type === "Clip");
      }
      console.log(filteredResults);
      
      if (filteredResults.length) {
        const youtubeKey = filteredResults[0].key; // Extract YouTube key
        navigate(`/movie/${youtubeKey}`); // Navigate to the trailer page with YouTube key
      } else {
        console.error('No trailer found.');
        navigate("/gpterror", { state: { errorMessage: "Trailer not found!" } });
      }
    } catch(err){
      navigate("/error");
    }
    
  }
  return (
    <div onClick={()=> showTrailer(id)} className='w-52 md:mx-2 cursor-pointer'>
      {
        posterPath ?       <img className='md:w-56 w-40' src={IMG_CDN_URL+posterPath} alt="Prooky"/>: <span className='text-white flex flex-wrap font-bold text-2xl pt-28'>{backdropPath}</span>

      }
    </div>
  )
}

export default MovieCard

import React from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

const VideoTitle = ({title, overview, id}) => {

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
    <div className='md:mt-[16%] mt-72 h-1/2 aspect-video md:pl-16 pl-2 w-2/5 absolute text-white z-20'>
      <h1 className='md:text-5xl md:mt-0 mt-24 text-xl font-bold'>{title}</h1>
      <p className='py-6 text-base w-full hidden md:block'>{overview}</p>
      <div className='flex'>
        <button onClick={()=> showTrailer(id)} className='bg-white text-black md:py-2 py-1 font-semibold px-6 md:mr-3 text-base rounded-md hover:bg-opacity-80'><i className="fa-solid fa-play"></i> Play</button>
        <button className='bg-gray-600 md:block hidden bg-opacity-50 text-white py-2 px-3 font-semibold text-base rounded-md hover:bg-opacity-70'><i className="fa-solid fa-circle-info"></i>   More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle

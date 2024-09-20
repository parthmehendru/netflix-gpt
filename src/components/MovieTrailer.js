import React from 'react';
import { useParams } from 'react-router-dom';

const MovieTrailer = () => {
  const { youtubeKey } = useParams(); // Extract the YouTube key from the route

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      {/* <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${youtubeKey}`}
        title="YouTube trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
      <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/"+youtubeKey+ "?&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3" }title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
}

export default MovieTrailer;

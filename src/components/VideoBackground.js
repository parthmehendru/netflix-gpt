import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
    useMovieTrailer(movieId);
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    
    

    
    
  return (
    <div className="h-screen w-full">
        <div className="h-screen w-full absolute bg-gradient-to-r from-black bg-opacity-10 pointer-events-none"></div>
        <iframe className="w-full h-full aspect-video z-10 md:-mt-[46px] -mt-[90px]" src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?&autoplay=1&mute=1&controls=0&loop=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <div className="absolute top-[50vh] right-4 z-20 flex flex-col gap-4">
      </div>
    </div>
  )
}

export default VideoBackground

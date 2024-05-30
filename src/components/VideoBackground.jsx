import React from "react";
import { useSelector } from "react-redux";
import useGetTrailerVideo from "../hooks/useGetTrailerVideo";

const VideoBackground = ({ movieId}) => {

    useGetTrailerVideo(movieId);

    const trailerSound = useSelector(store => store.movies.trailerSound);
    
    const trailerVideo = useSelector(store => store.movies.trailerVideo);
    // console.log(trailerVideo);





  return (
    <div className="w-full pt-[46%] md:pt-0">
      <iframe
      className="w-full aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?si=WtK1mfj1bI5GflN5&mute="+trailerSound+"&autoplay=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;

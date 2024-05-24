import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useGetTrailerVideo from "../hooks/useGetTrailerVideo";

const VideoBackground = ({ movieId }) => {

    useGetTrailerVideo(movieId);
    
    const trailerVideo = useSelector(store => store.movies.trailerVideo);
    // console.log(trailerVideo);





  return (
    <div className="w-full ">
      <iframe
      className="w-full aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?si=WtK1mfj1bI5GflN5&mute=1&autoplay=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;

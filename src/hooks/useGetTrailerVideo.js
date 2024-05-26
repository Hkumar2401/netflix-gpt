import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useGetTrailerVideo = (movieId) => {

    const dispatch = useDispatch();
    
  const getVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();

    const trailer = json.results.filter(
      (video) => video.name === "Official Trailer"
    );
    dispatch(addTrailerVideo(trailer[0]));
  };

  useEffect(() => {
    getVideos();
  }, []);
};

export default useGetTrailerVideo;

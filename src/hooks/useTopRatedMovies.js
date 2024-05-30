import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector(store=> store.movies.topRatedMovies);
  
  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json);
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topRatedMovies &&fetchData();
  }, []);
};

export default useTopRatedMovies;

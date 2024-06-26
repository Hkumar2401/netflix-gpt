import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector(store => store.movies.popularMovies);
  
  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !popularMovies && fetchData();
  }, []);
};

export default usePopularMovies;

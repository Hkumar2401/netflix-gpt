import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

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
    fetchData();
  }, []);
};

export default useTopRatedMovies;

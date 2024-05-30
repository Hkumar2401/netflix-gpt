import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const GptSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);

  const { gptSuggestions, suggestedMovies } = gpt;

  if(!suggestedMovies) return ;

  return (
    <div className="mt-20 p-8 pt-0 m-3 md:m-8 bg-black rounded-2xl bg-opacity-85 text-white z-40 relative">
        {gptSuggestions?.map((movie, i) => {
          return <MoviesList key={movie} title={movie} movies={suggestedMovies[i]} />;
        })}
    </div>
  );
};

export default GptSuggestions;

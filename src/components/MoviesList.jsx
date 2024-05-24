import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = (props) => {
  const { title, movies } = props;
//   console.log(movies);

  return (
    <div className="pt-7">
      <h1 className="text-3xl py-7 pl-5">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} data={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;

import React from "react";
import { CDN_IMG_URL } from "../utils/constants";

const MovieCard = ({ data }) => {
  const { poster_path} = data;
  console.log(data);

  return (
    <div className="w-[250px] pr-2 ">
      <img className="hover:opacity-100 opacity-80 cursor-pointer" src={CDN_IMG_URL + poster_path} alt="movie" />
    </div>
  );
};

export default MovieCard;

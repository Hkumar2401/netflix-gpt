import React from "react";
import { CDN_IMG_URL } from "../utils/constants";

const MovieCard = ({ data }) => {
  const { poster_path } = data;
  // console.log(data);

  return (
    <>
      {poster_path && (
        <div className="w-[150px] md:w-[250px] pr-2 ">
          <img
            className="cursor-pointer"
            src={CDN_IMG_URL + poster_path}
            alt="movie"
          />
        </div>
      )}
    </>
  );
};

export default MovieCard;

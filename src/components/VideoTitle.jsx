import React from "react";
import { MUTE_ICON, SOUND_ICON } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerSound } from "../utils/movieSlice";

const VideoTitle = ({ title, overview }) => {
  const trailerSound = useSelector((store) => store.movies.trailerSound);

  const dispatch = useDispatch();

  const handleClick = () => {
    trailerSound ? dispatch(addTrailerSound(0)) : dispatch(addTrailerSound(1));
  };

  return (
    <div className=" w-full aspect-video absolute bg-gradient-to-r from-black">
      <div className="pt-[18%] p-20 opacity-40 flex flex-col justify-center  hover:opacity-100 text-white">
        <h1 className="text-5xl font-bold w-1/3">{title}</h1>
        <p className="my-5 text-lg w-1/3 line-clamp-5">{overview}</p>
        <div className="mt-10 flex items-center w-1/3">
          <button className="bg-white p-3 px-8 font-bold text-black text-lg w-36 hover:bg-opacity-80">
            Play
          </button>
          <button className="bg-zinc-600 p-3 px-8 mx-4 text-white text-lg w-36 bg-opacity-70 hover:bg-opacity-100">
            More Info
          </button>
          <button
            onClick={handleClick}
            className="bg-white opacity-30 hover:opacity-90 ml-4 absolute right-16 top-28 p-4 rounded-[30px] "
          >
            <img
              className="mix-blend-multiply w-5"
              src={trailerSound ? MUTE_ICON : SOUND_ICON}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

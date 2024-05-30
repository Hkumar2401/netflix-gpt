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
    <div className=" w-full aspect-video absolute md:bg-gradient-to-r md:from-black">
      <div className="pt-[110%] md:pt-[18%] pl-5 md:pl-20 flex flex-col justify-center text-white">
        <h1 className="text-xl md:text-5xl font-bold w-2/3 md:w-1/3">{title}</h1>
        <p className="hidden md:block my-5 text-lg w-1/3 line-clamp-5">{overview}</p>
        <div className="mt-3 md:mt-10 flex items-center w-1/3">
          <button className="bg-white py-1 md:py-3 font-bold text-black text-lg w-20 md:w-36 hover:bg-opacity-80">
            Play
          </button>
          <button className="hidden md:block bg-zinc-600 p-3 px-8 mx-4 text-white text-lg w-36 bg-opacity-70 hover:bg-opacity-100">
            More Info
          </button>
          <button
            onClick={handleClick}
            className="bg-white opacity-30 hover:opacity-90 ml-4 absolute right-2 md:right-16 top-52 md:top-28 p-4 rounded-[30px] "
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

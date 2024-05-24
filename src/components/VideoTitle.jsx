import React from "react";

const VideoTitle = (props) => {
  const { title, overview, id } = props;

  return (
    <div className="pt-[20%] p-20 absolute w-full aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="my-5 text-lg w-2/5">{overview}</p>
      <div className="mt-10">
        <button className="bg-white p-3 px-8 font-bold text-black text-lg w-36 hover:bg-opacity-80">Play</button>
        <button className="bg-zinc-600 p-3 px-8 mx-4 text-white text-lg w-36 bg-opacity-70 hover:bg-opacity-100">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;

import React from "react";
import Header from "./Header";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { BG_IMG_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="background-img absolute">
        <img className="relative -z-10" src={BG_IMG_URL} alt="netflix-background" />
      </div>
      <Header />
      <div className="pt-32 ">
        <GptSearchBar />
        <GptSuggestions />
      </div>
    </div>
  );
};

export default GptSearchPage;

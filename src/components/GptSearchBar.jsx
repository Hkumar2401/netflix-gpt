import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
// import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptSuggestions, addSuggestedMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchInput = useRef();

  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);

  const handleSearchClick = async () => {

    //! GPT not working due to insufficient balance
    // const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchInput.current.value + " . only give me names of five movies, comma separated and are in the format : Avatar, Chup Chup Ke, Golmaal, Swarg, Baazigar";

    // const chatCompletion = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: 'Say this is a test' }],
    //   model: 'gpt-3.5-turbo',
    // });

    const gptSuggestions = "Avatar, Chup Chup Ke, Golmaal, Swarg, Baazigar";

    
    const gptResults = gptSuggestions.split(", ");
    dispatch(addGptSuggestions(gptResults));

    const promiseArray = gptResults.map(async (movie) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    });

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addSuggestedMovies(tmdbResults));
    // console.log(tmdbResults);
  };

  return (
    <div className="flex justify-center relative z-10 mt-20 md:mt-0">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-center bg-black bg-opacity-50 rounded-lg p-4 w-11/12 md:w-1/2"
      >
        <input
          ref={searchInput}
          className="px-4 py-3 w-3/4 rounded-s-lg outline-red-600 cursor-pointer"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleSearchClick}
          className="bg-red-600 px-4 py-3 w-1/4  rounded-e-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

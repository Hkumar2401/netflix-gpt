import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const gptSearch = useSelector((store) => store.gpt.gptSearch);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChangeClick = (e) =>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute pb-10 md:pb-0 flex flex-col md:flex-row justify-between items-center bg-gradient-to-b bg-black md:bg-transparent from-black w-full h-fit md:h-28 z-10">
      <div>
        <img
          className="w-40 m-6 mix-blend-screen"
          src={LOGO}
          alt="netflix-logo"
        />
      </div>
      {user && (
        <div className="flex">
          { gptSearch && 
            <select className="cursor-pointer text-white bg-zinc-600 mx-3 px-2 rounded-lg" onClick={handleLanguageChangeClick}>
            {SUPPORTED_LANGUAGES.map((lang) => {
              return (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              );
            })}
          </select>}

          <button
            onClick={handleGptSearchClick}
            className="bg-red-600 bg-opacity-70 hover:bg-opacity-100 text-white px-2 rounded-sm mr-4 w-28"
          >
            {gptSearch ? "Browse" : "GPT Search"}
          </button>
          <img
            className="w-12 mx-2"
            src={user && user.photoURL}
            alt="user-icon"
          />
          <button onClick={handleSignOut} className="mx-2 text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

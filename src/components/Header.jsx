import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
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

  return (
    <div className="absolute flex justify-between items-center bg-gradient-to-b from-black w-full h-28 z-10">
      <div>
        <img
          className="w-40 m-6 mix-blend-screen"
          src={LOGO}
          alt="netflix-logo"
        />
      </div>
      {user && (
        <div className="flex">
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

import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidSignIn, checkValidSignUp } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG_URL, DEFAULT_USER_PROFILE } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleClick = () => {
    const message = !isSignInForm
      ? checkValidSignUp(
          name.current.value,
          email.current.value,
          password.current.value
        )
      : checkValidSignIn(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //Sign Up Logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              DEFAULT_USER_PROFILE,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    } else {
      //Sign In Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    }
  };

  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="Login">
      <Header />
      <div className="background-img absolute ">
        <img
          className="h-screen object-cover w-screen"
          src={BG_IMG_URL}
          alt="netflix-background"
        />
      </div>
      <div className="form  absolute w-11/12 md:w-1/4 left-0 right-0 mx-auto top-[250px]">
        <form
          onSubmit={(e) => e.preventDefault()}
          action=""
          className="flex flex-col justify-center  bg-black text-white bg-opacity-80 p-12"
        >
          <h1 className="text-2xl my-5 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              className="w-full my-3 p-3 bg-zinc-700"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="w-full my-3 p-3 bg-zinc-700"
            type="email"
            placeholder="Email Address"
          />
          <input
            ref={password}
            className="w-full my-3 p-3 bg-zinc-700"
            type="password"
            placeholder="Password"
          />
          <p className="my-2 text-red-500 text-sm">{errorMessage}</p>
          <button
            onClick={handleClick}
            className="w-full p-2 bg-red-700 my-3 mt-7"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={toggleSignForm} className="text-sm my-6 cursor-pointer">
            {isSignInForm
              ? "New to Netflix ? Sign Up"
              : "Already registered! Sign In Now!"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

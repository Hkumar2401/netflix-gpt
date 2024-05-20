import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="Login">
      <Header />
      <div className="background-img absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="netflix-background"
        />
      </div>
      <div className="form  absolute w-1/3 left-0 right-0 mx-auto top-[250px]">
        <form
          action=""
          className="flex flex-col justify-center  bg-black text-white bg-opacity-80 p-12"
        >
          <h1 className="text-2xl my-5 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          { !isSignInForm &&
            <input
              className="w-full my-3 p-3 bg-zinc-700"
              type="text"
              placeholder="Full Name"
            />
          }
          <input
            className="w-full my-3 p-3 bg-zinc-700"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="w-full my-3 p-3 bg-zinc-700"
            type="password"
            placeholder="Password"
          />
          <button className="w-full p-2 bg-red-700 my-3 mt-7">{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p onClick={toggleSignForm} className="text-sm my-6 cursor-pointer">
            {isSignInForm ? "New to Netflix ? Sign Up" : "Already registered! Sign In Now!"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

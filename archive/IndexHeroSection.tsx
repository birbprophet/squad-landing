import React, { useState, useEffect, useRef } from "react";

import Div100vh from "react-div-100vh";
import { motion } from "framer-motion";
import colorScheme from "../colorScheme";
import TopBar from "./TopBar";

const IndexHero = props => {
  const { pathName } = props;
  return (
    <>
      <div className="mt-8 m-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h2
              className="
            mt-12 lg:mt-28 font-title font-extrabold 
            text-5xl text-left leading-none text-center
            sm:text-6xl"
            >
              <span>Workouts are better</span>
              <span className="mt-1">
                {" "}
                <motion.span
                  className="border-b-8 border-white cursor-default text-primary-700"
                  whileHover={{
                    color: colorScheme["primary-600"],
                    borderColor: colorScheme["primary-600"]
                  }}
                  whileTap={{
                    color: colorScheme["primary-600"],
                    borderColor: colorScheme["primary-600"]
                  }}
                >
                  together
                </motion.span>
              </span>
            </h2>
            <p
              id="subtitle"
              className="
            text-lg mt-8 text-center 
            sm:text-xl
            md:text-2xl"
            >
              Coordinating activities is{" "}
              <span className="hover:underline">hard</span> — so don't.
              <br />
              Choose your <span className="hover:underline">
                workout
              </span> & <span className="hover:underline">preferred crowd</span>
              , <br />
              then <span className="hover:underline">leave the rest to us</span>
              .
            </p>
            <div className="mt-8 mb-12 w-full flex">
              <div className="mt-5 sm:mx-auto sm:text-center sm:max-w-lg lg:text-left w-full">
                <p className="text-base font-medium text-gray-900">
                  Sign up to get invited to our launch event
                </p>
                <form action="#" method="POST" className="mt-3 sm:flex">
                  <input
                    aria-label="Email"
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline-red focus:border-primary-300 transition duration-150 ease-in-out sm:flex-1"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Notify me
                  </button>
                </form>
              </div>
            </div>
            {/* <div className="mt-6 text-red-700 text-sm text-center h-8">
        {state.showEmailError ? (
          <>Oops, you might have a typo there...</>
        ) : (
          <>&nbsp;</>
        )}
      </div> */}
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full lg:max-w-md">
              <div className="relative block w-full rounded-lg overflow-hidden focus:outline-none cursor-default text-center">
                <img
                  className="w-full"
                  src="../assets/images/squad-yuqing-find-out.png"
                  alt="Yuqing uses Squad"
                />
                <div className="mt-4">
                  <div className="text-lg font-semibold text-gray-700">
                    Yuqing uses Squad to find yoga buddies
                  </div>
                  <div className="text-gray-500">
                    Find out how you can do the same
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const IndexHeroSection = () => {
  const [state, setState] = useState({
    userEmail: "",
    showEmailError: false,
    typeformOpen: false
  });
  const buttonRef = useRef(null);

  const handleUserEmailOnChange = e => {
    setState({ ...state, userEmail: e.target.value });
  };

  const emailIsValid = state.userEmail.match(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i
  );

  const handleGetStartedOnClick = () => {
    if (!emailIsValid) {
      setState({ ...state, showEmailError: true });
    } else {
      setState({ ...state, typeformOpen: true });
    }
  };

  const handleTypeformOnSubmit = () => {
    buttonRef.current.typeform.close();
    setState({ ...state, typeformOpen: false });
  };

  useEffect(() => {
    if (emailIsValid && state.showEmailError) {
      setState({ ...state, showEmailError: false });
    }
  }, [emailIsValid, state.showEmailError]);

  useEffect(() => {
    if (state.typeformOpen) {
      buttonRef.current.typeform.open();
    }
  }, [state.typeformOpen]);

  return (
    <>
      <div className="h-full flex flex-col">
        <div className="flex-1 flex">
          <div
            id="title-section"
            className="m-auto flex max-w-full items-center"
          >
            <div className="flex flex-col flex-1">
              <div
                id="title"
                className="
                    font-title font-extrabold 
                    text-4xl text-left leading-none text-center
                    sm:text-6xl
                    md:text-5xl
                    lg:text-6xl
                    "
              >
                <div>Workouts are</div>
                <div className="mt-1">
                  better{" "}
                  <motion.span
                    className="border-b-8 border-white cursor-default text-primary-700"
                    whileHover={{
                      color: colorScheme["primary-600"],
                      borderColor: colorScheme["primary-600"]
                    }}
                    whileTap={{
                      color: colorScheme["primary-600"],
                      borderColor: colorScheme["primary-600"]
                    }}
                  >
                    together
                  </motion.span>
                </div>
              </div>
              <p
                id="subtitle"
                className="
                    text-lg mt-8 text-center 
                    sm:text-xl
                    md:mt-8 md:text-lg
                    lg:text-2xl"
              >
                Coordinating activities is{" "}
                <span className="hover:underline">hard</span> — so don't.
                <br />
                Choose your <span className="hover:underline">
                  workout
                </span> &{" "}
                <span className="hover:underline">preferred crowd</span>
                , <br />
                then{" "}
                <span className="hover:underline">leave the rest to us</span>.
              </p>
              <div className="mt-8 mb-12 w-full flex">
                <div className="mt-5 sm:mx-auto sm:text-center sm:max-w-lg lg:text-left w-full">
                  <p className="text-base font-medium text-gray-900">
                    Sign up to get notified when it’s ready.
                  </p>
                  <form action="#" method="POST" className="mt-3 sm:flex">
                    <input
                      aria-label="Email"
                      className="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                    >
                      Notify me
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-6 text-red-700 text-sm text-center h-8">
                {state.showEmailError ? (
                  <>Oops, you might have a typo there...</>
                ) : (
                  <>&nbsp;</>
                )}
              </div>
            </div>

            <div
              className="hidden md:flex flex-col items-center ml-10"
              style={{
                maxWidth: "40%",
                marginBottom: "15%"
              }}
            >
              <div>
                <img
                  src={require("../public/assets/images/squad-yuqing-find-out.png?resize&size=450")}
                />
              </div>
              <div className="text text-gray-500">
                Find out how <span className="hover:underline">you</span> can do
                the same
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexHeroSection;

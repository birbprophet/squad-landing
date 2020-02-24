import React, { useState, useEffect, useRef } from "react";

import LazyLoad from "react-lazyload";
import { motion } from "framer-motion";
import { ReactTypeformEmbed } from "react-typeform-embed";

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
    if (window !== undefined) {
      window.analytics.identify(state.userEmail, {
        clickedTypeform: true
      });
    }

    if (!emailIsValid) {
      setState({ ...state, showEmailError: true });
    } else {
      setState({ ...state, typeformOpen: true });
    }
  };

  const handleTypeformOnSubmit = () => {
    if (window !== undefined) {
      window.analytics.identify(state.userEmail, {
        completedTypeform: true
      });
    }
    buttonRef.current.typeform.close();
    setState({ ...state, typeformOpen: false });
  };

  useEffect(() => {
    if (window !== undefined) {
      window.analytics.page("Index");
    }
  }, []);

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
      {state.typeformOpen && (
        <ReactTypeformEmbed
          url={`https://ben964525.typeform.com/to/WCdkMd?email=${state.userEmail}&source=mainsite`}
          popup
          hideHeaders
          hideFooter
          mode="popup"
          onSubmit={handleTypeformOnSubmit}
          ref={buttonRef}
        />
      )}
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
                    text-5xl text-center leading-none
                    sm:text-6xl
                    md:text-5xl
                    lg:text-6xl
                    "
              >
                <div>Find people</div>
                <div className="mt-1">to work out</div>
                <div className="mt-1 text-blue-700">
                  <motion.span
                    className="border-b-8 border-white cursor-default"
                    whileHover={{
                      color: "#3182CE",
                      borderColor: "#3182CE"
                    }}
                    whileTap={{
                      color: "#3182CE",
                      borderColor: "#3182CE"
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
                Organising activities is{" "}
                <span className="hover:underline">hard</span> — so don't.
                <br />
                Choose your <span className="hover:underline">
                  activity
                </span> &{" "}
                <span className="hover:underline">preferred crowd</span>
                , <br />
                then{" "}
                <span className="hover:underline">leave the rest to us</span>.
              </p>
              <div className="mt-8 mb-12 w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="
                      border-2 border-black pt-3 pb-2 rounded-lg w-full text-lg text-center focus:outline-none focus:border-blue-700 focus:placeholder-blue-200
                      "
                  onChange={handleUserEmailOnChange}
                  value={state.userEmail}
                />
                <div className="mt-4">
                  <motion.button
                    className="
                        bg-blue-700 text-white font-extrabold pt-3 pb-2 rounded-lg w-full text-lg text-center focus:outline-none
                        "
                    whileHover={{
                      backgroundColor: "#3182CE",
                      scale: 1.02
                    }}
                    whileTap={{
                      backgroundColor: "#000",
                      scale: 0.98
                    }}
                    onClick={handleGetStartedOnClick}
                  >
                    Get Started
                  </motion.button>
                </div>
                <div className="mt-6 text-red-700 text-sm text-center h-8">
                  {state.showEmailError ? (
                    <>Oops, you might have a typo there...</>
                  ) : (
                    <>&nbsp;</>
                  )}
                </div>
              </div>
            </div>
            <div
              className="hidden md:flex lg:hidden flex-col items-center"
              style={{
                marginRight: "-7.5%",
                paddingLeft: "5%",
                marginBottom: "10%",
                marginLeft: "5%"
              }}
            >
              <LazyLoad height={400}>
                <motion.div
                  whileHover={{
                    scale: 1.05
                  }}
                >
                  <img
                    src={require("../public/assets/images/squad-yuqing-find-out.png?resize&size=400")}
                  />
                </motion.div>
              </LazyLoad>
              <div className="text text-gray-500">
                Find out how you can do the same
              </div>
            </div>
            <div
              className="hidden lg:flex flex-col items-center"
              style={{
                marginRight: "-7.5%",
                paddingLeft: "5%",
                marginBottom: "10%",
                marginLeft: "5%"
              }}
            >
              <LazyLoad height={450}>
                <motion.div
                  whileHover={{
                    scale: 1.05
                  }}
                >
                  <img
                    src={require("../public/assets/images/squad-yuqing-find-out.png?resize&size=450")}
                  />
                </motion.div>
              </LazyLoad>
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

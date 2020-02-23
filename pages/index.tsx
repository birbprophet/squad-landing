import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Div100vh from "react-div-100vh";
import { useMediaQuery } from "react-responsive";
import { FiMail } from "react-icons/fi";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import LazyLoad, { forceCheck } from "react-lazyload";
import { motion } from "framer-motion";
import { ReactTypeformEmbed } from "react-typeform-embed";

import IndexHeader from "../components/IndexHeader";

const MAILCHIMP_URL =
  "https://fitness.us4.list-manage.com/subscribe/post?u=50e805064958502d88ae939bc&id=36c73f6366";

const Home = () => {
  const [state, setState] = useState({
    userEmail: "",
    showEmailError: false,
    typeformOpen: false
  });

  const isXs = useMediaQuery({ maxWidth: 480 });
  const isSm = useMediaQuery({ maxWidth: 640 });
  const isMd = useMediaQuery({ maxWidth: 768 });
  const isLg = useMediaQuery({ maxWidth: 1024 });
  const isXl = useMediaQuery({ maxWidth: 1280 });

  const buttonRef = useRef(null);

  forceCheck();
  window.analytics.page("Index");

  const handleUserEmailOnChange = e => {
    setState({ ...state, userEmail: e.target.value });
  };

  const emailIsValid = state.userEmail.match(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i
  );

  const handleGetStartedOnClick = () => {
    window.analytics.identify(state.userEmail, {
      clickedTypeform: true
    });
    if (!emailIsValid) {
      setState({ ...state, showEmailError: true });
    } else {
      setState({ ...state, typeformOpen: true });
    }
  };

  const handleTypeformOnSubmit = () => {
    window.analytics.identify(state.userEmail, {
      completedTypeform: true
    });
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
      <IndexHeader siteTitle="Squad - Find people to work out together" />
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
      <Div100vh>
        <div className="flex flex-col h-full">
          <div id="topbar" className="flex px-8 py-4">
            <div
              className="
              text-2xl font-black font-title
              sm:text-3xl
            "
            >
              <motion.div
                whileHover={{
                  color: "#2B6CB0",
                  borderColor: "#2B6CB0"
                }}
                whileTap={{
                  color: "#2B6CB0",
                  borderColor: "#2B6CB0"
                }}
              >
                <Link href="/">
                  <a>squad</a>
                </Link>
              </motion.div>
            </div>
            <div className="flex-1" />
            {/* <div>
              {isXs ? "XS" : isSm ? "SM" : isMd ? "MD" : isLg ? "LG" : "XL"}
            </div> */}
          </div>
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
                    Organising activities is hard — so don't.
                    <br />
                    Choose your activity & preferred crowd, <br />
                    then leave the rest to us.
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
                          backgroundColor: "#3182CE"
                        }}
                        whileTap={{
                          backgroundColor: "#000"
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
                    Find out how you can do the same
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Div100vh>
      <div className="flex flex-col md:hidden items-center m-auto pt-8 pb-12">
        <LazyLoad height={400}>
          <motion.div
            whileHover={{
              scale: 1.05
            }}
          >
            <img
              src={require("../public/assets/images/squad-yuqing-find-out.png?resize&size=400")}
              className="fadein"
            />
          </motion.div>
        </LazyLoad>
        <div className="text text-gray-500">
          Find out how you can do the same
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-center py-12 sm:py-16 w-full flex bg-gray-100">
          <div className="m-auto">
            <div className="font-title text-3xl md:text-4xl lg:text-5xl font-bold">
              Fitness as a social experience
            </div>
            <div className="mt-6 px-8 md:text-lg lg:text-xl">
              You want to hang out with friends, meet new people, and do your
              workout.
              <br />
              Squad helps you to do it all at once.
            </div>
          </div>
        </div>
        <div className="py-12">
          <div className="px-8 sm:px-16 md:px-20 lg:px-24 py-4 sm:py-12 flex">
            <div
              className="font-title font-bold hidden sm:flex"
              style={{
                fontSize: "128px",
                lineHeight: "128px",
                minWidth: "80px"
              }}
            >
              1
            </div>
            <div
              className="h-32 mt-4 sm:mt-3 sm:ml-6 mx-auto"
              style={{ maxWidth: "320px" }}
            >
              <div className="text-2xl sm:text-3xl font-title font-bold text-center sm:text-left">
                Create a profile
              </div>
              <div className="text-sm sm:text-lg mt-1 text-center sm:text-left">
                Choose from over 20+ fitness activities, and configure your
                skill level for each
              </div>
            </div>
          </div>

          <div className="px-8 sm:px-16 md:px-20 lg:px-24 py-4 sm:py-12 flex">
            <div
              className="font-title font-bold hidden sm:flex"
              style={{
                fontSize: "128px",
                lineHeight: "128px",
                minWidth: "80px"
              }}
            >
              2
            </div>
            <div
              className="h-32 mt-4 sm:mt-3 sm:ml-6 mx-auto"
              style={{ maxWidth: "320px" }}
            >
              <div className="text-2xl sm:text-3xl font-title font-bold text-center sm:text-left">
                Find your squad
              </div>
              <div className="text-sm sm:text-lg mt-1 text-center sm:text-left">
                Select your activity, time, and squadmate preferences, and get
                assigned a squad
              </div>
            </div>
          </div>
          <div className="px-8 sm:px-16 md:px-20 lg:px-24 py-4 sm:py-12 flex">
            <div
              className="font-title font-bold hidden sm:flex"
              style={{
                fontSize: "128px",
                lineHeight: "128px",
                minWidth: "80px"
              }}
            >
              3
            </div>
            <div
              className="h-32 mt-4 sm:mt-3 sm:ml-6 mx-auto"
              style={{ maxWidth: "320px" }}
            >
              <div className="text-2xl sm:text-3xl font-title font-bold text-center sm:text-left">
                Workout together
              </div>
              <div className="text-sm sm:text-lg mt-1 text-center sm:text-left">
                Plan, coordinate, and book classes or venues, all within the app
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 sm:px-16 md:px-20 lg:px-24">
          <div className="font-title font-bold text-xl mb-2">
            Want to find out more?
          </div>
          <div className="mt-2" style={{ maxWidth: "640px" }}>
            <MailchimpSubscribe
              url={MAILCHIMP_URL}
              render={({ subscribe, status }) => (
                <CustomForm
                  status={status}
                  onValidated={formData => subscribe(formData)}
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 px-16 py-16 mt-16 sm:flex">
        <div className="flex-1 flex flex-col">
          <div className="font-title font-black text-xl">squad</div>
          <div className="w-56 text-sm mt-2 text-justify text-gray-700">
            Squad is an app based in Singapore that helps users find groups to
            workout togther.
            <br />
            <br />© 2020 Squad Fitness Pte Ltd
          </div>
        </div>
        <div className="flex-1 flex flex-col mt-16 sm:mt-0">
          <div className="font-bold text-xl">Links</div>
          <hr className="mr-8" />
          <div className="w-56 text-sm mt-2 text-justify text-gray-700">
            <a href="https://squad.fitness">
              <u>Home</u>
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col mt-16 sm:mt-0">
          <div className="font-bold text-xl">Contact Us</div>
          <hr className="mr-8" />
          <div className="w-56 text-sm mt-2 text-justify text-gray-700">
            Feel free to drop us an email at{" "}
            <a href="mailto:ben@squad.fitness">
              <u>ben@squad.fitness</u>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const CustomForm = ({ status, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <div
      id="signup"
      className="mb-8 border-b-2 border-gray-500 flex items-center py-2 px-1"
    >
      {status === "sending" && (
        <div className="text-blue-700 text-center w-full">Submitting...</div>
      )}
      {status === "error" && (
        <div className="text-red-700 text-center w-full">
          You are already subscribed!
        </div>
      )}
      {status === "success" && (
        <div className="text-green-700 text-center w-full">
          Success! Welcome to the Squad!
        </div>
      )}
      {!status && (
        <>
          <FiMail size={40} className="text-gray-700 -mb-1" />
          <input
            ref={node => (email = node)}
            type="email"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none -mb-1"
            placeholder="Join our pre-launch tests"
          />
          <button
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700  text-white py-1 px-3 rounded-lg"
            type="button"
            onClick={submit}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default Home;

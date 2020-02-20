import React, { useState } from "react";
import Head from "next/head";
import Div100vh from "react-div-100vh";
import { FiMail } from "react-icons/fi";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "https://fitness.us4.list-manage.com/subscribe/post?u=50e805064958502d88ae939bc&id=36c73f6366";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Div100vh>
        <div className="flex flex-col h-full">
          <div id="topbar" className="flex px-8 py-4 shadow-md">
            <div className="text-xl font-black font-title">squad</div>
          </div>
          <div className="px-8 h-full flex flex-col">
            <div className="flex-1 flex flex-col">
              <div id="text" className="my-auto" style={{ maxWidth: "640px" }}>
                <div
                  id="title"
                  className="font-title font-extrabold text-4xl sm:text-5xl md:text-6xl"
                >
                  Find your{" "}
                  <span className="text-blue-500 border-b-4 border-blue-500 text-4xl sm:text-5xl md:text-6xl sm:border-b-8">
                    squad
                  </span>
                  <br />
                  Get fit together
                </div>
                <p
                  id="subtitle"
                  className="text-lg mt-4 md:mt-8 sm:text-xl md:text-2xl"
                >
                  Working out is a great way to meet new people with common
                  interests.&nbsp;
                  <span className="hidden sm:inline-flex">
                    Find your squad while doing the activities you love.
                  </span>
                </p>
                <div className="mt-16" style={{ maxWidth: "640px" }}>
                  <MailchimpSubscribe
                    url={url}
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
          </div>
        </div>
      </Div100vh>
      <div className="flex flex-col">
        <div className="text-center py-12 sm:py-16 w-full flex bg-gray-100">
          <div className="m-auto">
            <div className="font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Working out can be a social experience
            </div>
            <div className="mt-4 px-8 text-sm sm:text-base md:text-lg lg:text-xl">
              You want to hang out with friends, meet new people, and do your
              workout.
              <br />
              Squad helps you to do it all at once.
            </div>
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

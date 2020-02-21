import React from "react";
import Head from "next/head";
import Link from "next/link";
import Div100vh from "react-div-100vh";
import { FiMail } from "react-icons/fi";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MAILCHIMP_URL =
  "https://fitness.us4.list-manage.com/subscribe/post?u=50e805064958502d88ae939bc&id=36c73f6366";

const Home = () => {
  return (
    <>
      <Head>
        <title>Squad - find your squad, get fit together</title>
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()`
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
            analytics.load("rc4dK0bDR9lfm7R0gUU4m0igIrJYsOpb");
            analytics.page();
            }}();`
          }}
        ></script>
      </Head>
      <Div100vh>
        <div className="flex flex-col h-full">
          <div id="topbar" className="flex px-8 py-4 shadow-md">
            <div className="text-xl font-black font-title">
              <Link href="/">
                <a>squad</a>
              </Link>
            </div>
          </div>

          <div className="px-8 sm:px-16 md:px-20 lg:px-24 h-full flex flex-col">
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
                  Workouts can be a great way to meet new people with common
                  interests.&nbsp;
                  <span className="hidden sm:inline-flex">
                    Find your squad while doing the activities you love.
                  </span>
                </p>
                <div className="mt-16" style={{ maxWidth: "640px" }}>
                  <a
                    className="typeform-share button bg-blue-500 text-white font-title font-bold px-8 py-4 rounded-full text-xl"
                    href="https://ben964525.typeform.com/to/WCdkMd"
                    data-mode="popup"
                    data-hide-footer
                    data-submit-close-delay="2"
                  >
                    I'm Interested
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Div100vh>
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

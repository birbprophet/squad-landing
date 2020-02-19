import Head from "next/head";
import Div100vh from "react-div-100vh";
import { FiMail } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          id="mcjs"
          dangerouslySetInnerHTML={{
            __html: `
            !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/50e805064958502d88ae939bc/5c9f3c37fc62ab9ca0b9af3a7.js");`
          }}
        />
      </Head>
      <Div100vh>
        <div className="flex flex-col h-full">
          <div id="topbar" className="flex px-8 py-4 shadow-md">
            <div className="text-xl font-black font-title">squad</div>
          </div>
          <div className="px-8 h-full flex flex-col">
            <div className="flex-1 flex flex-col">
              <div id="text" className="my-auto">
                <div
                  id="title"
                  className="font-title font-extrabold text-3xl md:text-6xl"
                >
                  Find your{" "}
                  <span className="text-blue-500 border-b-4 border-blue-500 text-3xl md:text-6xl md:border-b-8">
                    squad
                  </span>
                  <br />
                  Get fit together
                </div>
                <p id="subtitle" className="text-lg mt-4 md:mt-8 md:text-2xl">
                  Workouts can be a great way to meet new people with common
                  interests.
                  <span className="hidden md:inline-flex">
                    &nbsp;Find your squad while doing the activities you love.
                  </span>
                </p>
              </div>
            </div>
            <div
              id="signup"
              className="mb-8 border-b-2 border-gray-500 flex items-center py-2 px-1"
            >
              <FiMail size={40} className="text-gray-700 -mb-1" />
              <input
                type="email"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none -mb-1"
                placeholder="Join our pre-launch tests"
              />
              <button
                className="flex-shrink-0 bg-blue-500 hover:bg-blue-700  text-white py-1 px-3 rounded-lg"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Div100vh>
    </>
  );
};

export default Home;

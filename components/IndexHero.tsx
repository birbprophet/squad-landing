import { motion } from "framer-motion";
import colorScheme from "../colorScheme";
import { EmailContainer } from "../scripts/EmailContainer";

const IndexHero = () => {
  const { email, setEmail } = EmailContainer.useContainer();
  const handleEmailOnChange = e => {
    setEmail(e.target.value);
  };
  const imageSrcSet = require("../public/assets/images/squad-yuqing-find-out.png?resize&sizes[]=50&sizes[]=100&sizes[]=150&sizes[]=200&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=750&sizes[]=1000&sizes[]=1500");

  return (
    <>
      <div className="mt-8 m-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="mt-4 sm:mt-10 lg:mt-28 mb-2">
              <div className="font-semibold uppercase tracking-wide text-gray-500 text-center">
                Launching June 2020
              </div>
            </div>
            <h2
              className="
            font-title font-extrabold 
            text-5xl text-left leading-none text-center
            sm:text-6xl"
            >
              <span className="hidden sm:inline">Workouts are better</span>
              <span className="inline sm:hidden">
                Workouts
                <br />
                are better
              </span>
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
            text-lg mt-10 text-center 
            sm:text-xl
            md:text-2xl"
            >
              Coordinating activities is hard — so don't.
              <br />
              Choose your activity & preferred crowd, <br />
              then leave the rest to us.
            </p>
            <div className="mt-4 sm:mt-8 mb-12 w-full flex">
              <div className="mt-5 sm:mx-auto sm:text-center sm:max-w-lg lg:text-left w-full">
                <p className="text-base font-medium text-gray-900">
                  Sign up to get invited to our launch event
                </p>
                <div className="mt-3 sm:flex">
                  <input
                    aria-label="Email"
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline-red focus:border-primary-300 transition duration-150 ease-in-out sm:flex-1"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailOnChange}
                  />
                  <button className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full lg:max-w-md">
              <div className="relative block w-full rounded-lg overflow-hidden focus:outline-none cursor-default text-center">
                <img
                  className="w-full"
                  srcSet={imageSrcSet.srcSet}
                  src={imageSrcSet.src}
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

export default IndexHero;

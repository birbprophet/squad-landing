import Link from "next/link";

const IndexImageFeature = () => {
  const imageSrcSet = require("../public/assets/images/squad-image-feature.jpg?resize&sizes[]=50&sizes[]=100&sizes[]=150&sizes[]=200&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=750&sizes[]=1000&sizes[]=1500");
  return (
    <div className="relative bg-primary-800">
      <div className="h-56 bg-gray-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          srcSet={imageSrcSet.srcSet}
          src={imageSrcSet.src}
          alt="Support team"
        />
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
            Why use Squad?
          </div>
          <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 font-title">
            Fitness can be social
          </h2>
          <p className="mt-5 text-lg leading-7 text-gray-300">
            Squad is a social fitness platform designed to help you find other
            people to work out with, in a safe and private manner. Create a
            profile, state your availability and preferences, and get
            automatically matched to a squad.
          </p>
          <div className="mt-8 md:mt-16">
            <div className="inline-flex rounded-md shadow">
              <Link href="/why">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  Explore all features
                  <svg
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5zM5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexImageFeature;

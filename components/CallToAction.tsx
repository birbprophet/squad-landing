import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Sign up today
          <br />
          <span className="text-primary-600">to join our launch event</span>
        </h2>
        <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/form">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Get Started
              </a>
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link href="/why">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-primary-600 bg-white hover:text-primary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Learn more
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

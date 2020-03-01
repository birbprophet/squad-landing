import Head from "next/head";
import Link from "next/link";

import TopBar from "../components/TopBar";
import SiteFooter from "../components/SiteFooter";

const Home = props => {
  const { pathName } = props;
  const imageYuqingSrcSet = require("../public/assets/images/squad-yuqing-find-out.png?resize&sizes[]=50&sizes[]=100&sizes[]=150&sizes[]=200&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=750&sizes[]=1000&sizes[]=1500");
  const imageBenSrcSet = require("../public/assets/images/squad-ben-find-out.png?resize&sizes[]=50&sizes[]=100&sizes[]=150&sizes[]=200&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=750&sizes[]=1000&sizes[]=1500");

  return (
    <>
      <Head>
        <title>Squad - Workouts are better together</title>
      </Head>
      <div className="relative bg-white overflow-hidden">
        {/* <MediaQueryHint /> */}
        <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
          <TopBar pathName={pathName} />
        </div>
        <AboutTopSection />
      </div>
      <div className="bg-gray-50 mt-16">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Interested?
            <br />
            <span className="text-primary-600">
              We'd love to tell you more.
            </span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="mailto:hello@squad.fitness"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Email Us
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="/contact">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-primary-600 bg-white hover:text-primary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  Contact Info
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
};

const AboutTopSection = () => (
  <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    <div className="sm:text-center lg:text-left">
      <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl font-title">
        We are looking for
        <br className="" />
        <span className="text-primary-700">studio partners</span>
      </h2>
      <p className="mt-6 text-base text-gray-500 sm:mt-10 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-10 md:text-xl lg:mx-0">
        We are currently looking for studio partners. As a partner, you can
        connect your existing booking provider (i.e. MindBody, Zingfit, etc.) to
        our platform to allow our users to book your classes or locations
        directly through our app.
        <br />
        <br />
        If you're interested in joining us as a partner, please reach us via
        email at{" "}
        <a
          href="mailto:hello@squad.fitness"
          className="font-bold"
          target="_blank"
        >
          <u>hello@squad.fitness</u>
        </a>
        .
      </p>
    </div>
  </div>
);

export default Home;

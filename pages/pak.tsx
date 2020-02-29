import Head from "next/head";

import TopBar from "../components/TopBar";
import SiteFooter from "../components/SiteFooter";

const Home = props => {
  const { pathName } = props;

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
        <div className="bg-gray-50">
          <div className="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                Documents for PAK Challenge
              </h2>
              <div className="mt-6 border-t-2 border-gray-200 pt-6">
                <dl>
                  <div>
                    <dt className="text-lg leading-7">
                      <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                        <span className="font-medium text-gray-900">
                          Pitch Deck
                        </span>
                        {/* <span className="ml-6 h-7 flex items-center">
                          <svg
                            className="h-6 w-6 transform -rotate-180"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span> */}
                      </button>
                    </dt>
                    <dd className="mt-2 pr-12">
                      <p className="text-base leading-6 text-gray-500">
                        Our latest pitch deck (updated 29 Feb 2020) can be found{" "}
                        <a
                          href="/assets/documents/squad_deck.pdf"
                          className="font-bold"
                          target="_blank"
                        >
                          <u>here</u>
                        </a>
                        .
                      </p>
                    </dd>
                  </div>
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <div>
                      <dt className="text-lg leading-7">
                        <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                          <span className="font-medium text-gray-900">
                            2 Minute Intro Video
                          </span>
                          {/* <span className="ml-6 h-7 flex items-center">
                            <svg
                              className="h-6 w-6 transform -rotate-180"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </span> */}
                        </button>
                      </dt>
                      <dd className="mt-2 pr-12">
                        <p className="text-base leading-6 text-gray-500">
                          You can download the video{" "}
                          <a
                            href="https://squad-fitness.s3-ap-southeast-1.amazonaws.com/2_min_intro.mp4"
                            className="font-bold"
                            target="_blank"
                          >
                            <u>here</u>
                          </a>
                          .
                        </p>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
};

export default Home;

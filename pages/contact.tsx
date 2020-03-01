import Head from "next/head";

import TopBar from "../components/TopBar";
import SiteFooter from "../components/SiteFooter";

const ContactPage = props => {
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
        <div className="bg-gray-50 overflow-hidden">
          <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <svg
              className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="svg-pattern-squares-1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#svg-pattern-squares-1)"
              />
            </svg>
            <div className="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
              <div className="lg:col-span-1">
                <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 font-title">
                  Contact Us
                </h3>
              </div>
              <div className="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="mt-5">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Email Us
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      You can reach us via email at{" "}
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
                <div className="mt-10 sm:mt-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="mt-5">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Live Chat
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      You can also reach us via the live chat bubble at the
                      bottom right hand corner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
};

export default ContactPage;

const IndexFeaturesSection = () => {
  const imageOneSrcSet = require("../public/assets/images/squad-profile-mockups.png?resize&sizes[]=50&sizes[]=100&sizes[]=150&sizes[]=200&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=750&sizes[]=1000&sizes[]=1500");
  const imageTwoSrcSet = require("../public/assets/images/squad-find-mockups.png?resize&sizes[]=50&sizes[]=100&sizes[]=150&sizes[]=200&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=750&sizes[]=1000&sizes[]=1500");
  const imageThreeSrcSet = require("../public/assets/images/squad-chat-mockups.png?resize&sizes[]=50&sizes[]=100&sizes[]=150&sizes[]=200&sizes[]=300&sizes[]=400&sizes[]=500&sizes[]=750&sizes[]=1000&sizes[]=1500");
  return (
    <div className="py-16 bg-white overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
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
          <rect width={404} height={784} fill="url(#svg-pattern-squares-1)" />
        </svg>
        <div className="relative">
          <h3 className="text-center text-4xl font-title leading-10 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            A better way to work out
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
            Squad uses the best technology to provide you with a seamless
            experience so you can focus on what matters: meeting new people and
            getting fit
          </p>
        </div>
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h4 className="text-2xl font-title leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
              Profile Based System
            </h4>
            <p className="mt-3 text-lg leading-7 text-gray-500">
              Finding the right crowd is the most important part of a group
              workout experience, but it also difficult. Squad uses a profile
              based system to find the most suitable squad for you.
            </p>
            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Choose from over 20 activities
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Find your favourite sports from our growing list of
                      activities. Add subactivities to further describe your
                      activity preferences.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Detailed customisation
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Further customise your profile by adding your skill level,
                      frequency, and choose a main activity to add as your
                      profile badge.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Keep personal details private
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Users outside of your friends list will only be able to
                      see your first name and relevant activity information.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-10 -mx-4 relative lg:mt-0">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="svg-pattern-squares-2"
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
                width={784}
                height={404}
                fill="url(#svg-pattern-squares-2)"
              />
            </svg>
            <img
              className="relative mx-auto"
              srcSet={imageOneSrcSet.srcSet}
              src={imageOneSrcSet.src}
              alt=""
            />
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={606}
          fill="none"
          viewBox="0 0 404 606"
        >
          <defs>
            <pattern
              id="svg-pattern-squares-3"
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
          <rect width={404} height={784} fill="url(#svg-pattern-squares-3)" />
        </svg>
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h4 className="text-2xl font-title leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                Automated Matching
              </h4>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                Online games have been using this for years: just click play,
                and automatically get matched to players of the same skill
                level. We apply the same thing in real life to help you save
                time.
              </p>
              <ul className="mt-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
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
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        Availability and preferences
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Specify your activity preferences such as subactivity
                        choices, available dates, time of day, group size, and
                        other details.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <svg
                          className="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        Filter by demographic
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Sometimes, you just want to hang out with people of the
                        same age, gender, or location — and that's completely
                        fine.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
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
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        Fully automated matching
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Once you've specified your preferences, all you need to
                        do is click a button, and let our algorithms handle the
                        rest.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="svg-pattern-squares-4"
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
                  width={784}
                  height={404}
                  fill="url(#svg-pattern-squares-4)"
                />
              </svg>
              <img
                className="relative mx-auto"
                srcSet={imageTwoSrcSet.srcSet}
                src={imageTwoSrcSet.src}
                alt=""
              />
            </div>
          </div>
        </div>
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 translate-y-1/2"
          width={404}
          height={606}
          fill="none"
          viewBox="0 0 404 606"
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
          <rect width={404} height={784} fill="url(#svg-pattern-squares-1)" />
        </svg>
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h4 className="text-2xl font-title leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
              Effective Coordination
            </h4>
            <p className="mt-3 text-lg leading-7 text-gray-500">
              The app comes with a fully integrated chat system that helps you
              coordinate your meetups from the start to the end.
            </p>
            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Say no to ghosts
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Everyone hates unresponsive members, so we implemented a
                      system that penalizes people who go missing.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
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
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Moderated by bots
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      SquadBot is designed to take the initiative, and it gives
                      everyone a little push to start planning the activity.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
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
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Book activities from within the app
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      (Coming soon) Access gyms and studios through our
                      application. When your group is ready, just press to book!
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-10 -mx-4 relative lg:mt-0">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="svg-pattern-squares-2"
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
                width={784}
                height={404}
                fill="url(#svg-pattern-squares-2)"
              />
            </svg>
            <img
              className="relative mx-auto"
              srcSet={imageThreeSrcSet.srcSet}
              src={imageThreeSrcSet.src}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexFeaturesSection;

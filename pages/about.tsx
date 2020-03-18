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
        <div className="bg-primary-700 mt-12 sm:mt-16 lg:mt-24">
          <div className="pt-12 sm:pt-16 lg:pt-24">
            <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto lg:max-w-none">
                <p className="mt-2 text-4xl leading-9 font-extrabold text-white sm:text-5xl sm:leading-10 lg:text-6xl lg:leading-none font-title">
                  OUR TEAM
                </p>
                <p className="mt-2 text-lg sm:text-xl leading-7 text-gray-300">
                  Ben & Yuqing have known each other for over 4 years,
                  <br />
                  and have completed numerous other projects together
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
            <div className="relative">
              <div className="absolute inset-0 h-3/4 bg-primary-700" />
              <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5">
                  <div className="rounded-lg shadow-lg overflow-hidden">
                    <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                      <div>
                        <img
                          className="w-full"
                          srcSet={imageYuqingSrcSet.srcSet}
                          src={imageYuqingSrcSet.src}
                          alt="Yuqing uses Squad"
                        />
                      </div>
                      <div className="mt-8 text-6xl leading-none font-extrabold text-center font-title">
                        Yuqing
                        <br />
                        Zhao
                      </div>
                      <p className="mt-5 text-lg leading-7 text-gray-500 text-center">
                        Co-founder, Marketing
                      </p>
                    </div>
                    <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                      <div className="text-lg">
                        With over 240,000 followers on Instagram, Yuqing ranks
                        among one of the top lifestyle and fitness influencers
                        in Singapore. She has worked with well known fitness
                        brands such as Puma, Under Armour, ClassPass, and many
                        others. She is also a rising content creator on YouTube.
                        <br />
                        <br />
                        Yuqing is currently working as a broker at a commodity
                        trading firm. She graduated from NUS in 2017 with a
                        degree in Communications & New Media.
                      </div>
                      <div className="mt-6 rounded-md shadow">
                        <a
                          href="https://www.linkedin.com/in/yuqing-zhao-1201b6120/"
                          className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                        >
                          Find out more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-lg shadow-lg overflow-hidden lg:mt-0">
                    <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                      <div>
                        <img
                          className="w-full"
                          srcSet={imageBenSrcSet.srcSet}
                          src={imageBenSrcSet.src}
                          alt="Yuqing uses Squad"
                        />
                      </div>

                      <div className="mt-8 text-6xl leading-none font-extrabold text-center font-title">
                        Benjamin
                        <br />
                        Tang
                      </div>
                      <p className="mt-5 text-lg leading-7 text-gray-500 text-center">
                        Co-founder, Technology
                      </p>
                    </div>
                    <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                      <div className="text-lg">
                        When he was 22 years old, Ben was offered a position as
                        a quantitative analyst at a top investment bank, making
                        him the youngest ever to attain the role. Ben
                        specialises in applying AI to quantitative research
                        topics, and is also an experienced fullstack developer
                        with many successful projects under his belt.
                        <br />
                        <br />
                        Benjamin is also an ex-national athlete in middle
                        distance track and field, and had previously represented
                        Singapore in regional games.
                      </div>
                      <div className="mt-6 rounded-md shadow">
                        <a
                          href="https://www.linkedin.com/in/benjamintanghz/"
                          className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                        >
                          Find out more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-16">
              <div className="max-w-md mx-auto lg:max-w-5xl">
                <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                  <div className="flex-1">
                    <div className="text-lg font-medium">
                      Are you an investor?
                    </div>
                    <div className="mt-4 text-lg leading-7 text-gray-500">
                      Squad is looking to raise seed funding to market our app
                      in Singapore and beyond. Check out our investors page for
                      more details.
                    </div>
                  </div>
                  <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                    <Link href="/investors">
                      <a className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                        Visit Investors Page
                      </a>
                    </Link>
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

const AboutTopSection = () => (
  <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    <div className="sm:text-center lg:text-left">
      <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl font-title">
        We are a startup <br className="" />
        from <span className="text-primary-700">Singapore</span>
      </h2>
      <p className="mt-6 text-base text-gray-500 sm:mt-10 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-10 md:text-xl lg:mx-0">
        Squad was founded by Benjamin & Yuqing on 22nd February 2020 over a
        post-workout coffee chat. Since then, we have been working tirelessly on
        our app development and marketing plan.
      </p>
    </div>
  </div>
);

export default Home;

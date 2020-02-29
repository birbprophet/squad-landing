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
                Page is under constuction
              </h2>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
};

export default Home;

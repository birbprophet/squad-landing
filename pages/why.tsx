import { useState } from "react";
import Head from "next/head";

import TopBar from "../components/TopBar";
import IndexHero from "../components/IndexHero";
import IndexImageFeature from "../components/IndexImageFeature";
import IndexFeaturesSection from "../components/IndexFeaturesSection";
import CallToAction from "../components/CallToAction";
import SiteFooter from "../components/SiteFooter";

const Home = props => {
  const { pathName } = props;

  const [state, setState] = useState({
    menuOpen: false
  });

  const toggleMenuOpen = () => {
    setState({ ...state, menuOpen: !state.menuOpen });
  };

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
        <IndexFeaturesSection />
        <CallToAction />
        <SiteFooter />
      </div>
    </>
  );
};

export default Home;

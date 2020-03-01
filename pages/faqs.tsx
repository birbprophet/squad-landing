import Head from "next/head";
import Link from "next/link";

import TopBar from "../components/TopBar";
import CallToAction from "../components/CallToAction";
import SiteFooter from "../components/SiteFooter";

const FaqsPage = props => {
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
        <div className="bg-white">
          <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
            <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <div className="mt-6 border-t-2 border-gray-100 pt-10">
              <dl className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      When is Squad launching?
                    </dt>
                    <dd className="mt-2">
                      <p className="text-base leading-6 text-gray-500">
                        Squad will be released on iOS App Store, Android Google
                        Play Store, and as a standalone mobile web application
                        in June 2020.
                      </p>
                    </dd>
                  </div>
                  <div className="mt-12">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Can I join squads with existing friends
                    </dt>
                    <dd className="mt-2">
                      <p className="text-base leading-6 text-gray-500">
                        Yes, you can add friends to your current party to search
                        for squads together, similar to how matchmaking in
                        online games work.
                      </p>
                    </dd>
                  </div>
                  <div className="mt-12">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Can I report abusive users?
                    </dt>
                    <dd className="mt-2">
                      <p className="text-base leading-6 text-gray-500">
                        Yes. We have a system in place for reporting abusive
                        users by banning the phone number associated account.
                      </p>
                    </dd>
                  </div>
                </div>
                <div className="mt-12 md:mt-0">
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Why should I sign up early?
                    </dt>
                    <dd className="mt-2">
                      <p className="text-base leading-6 text-gray-500">
                        By{" "}
                        <Link href="/form">
                          <a>
                            <u>signing up early</u>
                          </a>
                        </Link>
                        , you can help us shape the app while we develop it.
                        Early sign ups will also get invited to our exclusive
                        launch party.
                      </p>
                    </dd>
                  </div>
                  <div className="mt-12">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Is this a dating app?
                    </dt>
                    <dd className="mt-2">
                      <p className="text-base leading-6 text-gray-500">
                        Squad helps people to connect and work out together, so
                        it's possible that you might find a special connection
                        with someone you met through Squad.
                      </p>
                    </dd>
                  </div>
                  <div className="mt-12">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      How can I find out more?
                    </dt>
                    <dd className="mt-2">
                      <p className="text-base leading-6 text-gray-500">
                        You can chat with us via the live chat bubble at the
                        bottom right hand corner, or drop us an email at{" "}
                        <a href="mailto:hello@squad.fitness">
                          <u>hello@squad.fitness</u>
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
      <CallToAction />
      <SiteFooter />
    </>
  );
};

export default FaqsPage;

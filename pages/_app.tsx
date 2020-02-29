import React from "react";
import App from "next/app";

import "../css/tailwind.css";
import "../css/styles.css";
import "typeface-montserrat";
import "typeface-hind";

import FirebaseProvider from "../components/FirebaseProvider";
import BaseHeaders from "../components/BaseHeaders";
import { EmailContainer } from "../scripts/EmailContainer";

class NextApp extends App {
  render() {
    const { Component: Page, pageProps, router } = this.props;

    return (
      <>
        <BaseHeaders />
        <FirebaseProvider>
          <EmailContainer.Provider>
            <Page {...pageProps} pathName={router.pathname}></Page>
          </EmailContainer.Provider>
        </FirebaseProvider>
      </>
    );
  }
}

export default NextApp;

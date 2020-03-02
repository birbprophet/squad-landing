import React from "react";
import App from "next/app";
import Head from "next/head";

import "../css/tailwind.css";
import "../css/styles.css";
import "typeface-montserrat";
import "typeface-hind";

import FirebaseProvider from "../components/FirebaseProvider";
import BaseHeaders from "../components/BaseHeaders";
import FormHeaders from "../components/FormHeaders";

import { EmailContainer } from "../scripts/EmailContainer";

class NextApp extends App {
  render() {
    const { Component: Page, pageProps, router } = this.props;

    return (
      <>
        {router.pathname === "/form" ? <FormHeaders /> : <BaseHeaders />}
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

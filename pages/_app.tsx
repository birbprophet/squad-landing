import React from "react";
import App from "next/app";

import "../css/tailwind.css";
import "../css/styles.css";
import "typeface-roboto";

import FirebaseProvider from "../components/FirebaseProvider";

class NextApp extends App {
  render() {
    const { Component: Page, pageProps } = this.props;

    return (
      <FirebaseProvider>
        <Page {...pageProps}></Page>
      </FirebaseProvider>
    );
  }
}

export default NextApp;

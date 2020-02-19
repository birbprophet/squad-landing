import React, { createContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyDIBRxDoxB44aESE2p85FgNxoFftSau4Zk",
  authDomain: "the-squad-app.firebaseapp.com",
  databaseURL: "https://the-squad-app.firebaseio.com",
  projectId: "the-squad-app",
  storageBucket: "the-squad-app.appspot.com",
  messagingSenderId: "400184238850",
  appId: "1:400184238850:web:e67c5e6b5f83c7109b981b",
  measurementId: "G-4Q58Z9LQEK"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const FirebaseContext = createContext({});

export const FirebaseProvider = ({ children }) => {
  const [state, setState] = useState({});

  useEffect(() => {
    setState({
      perf: firebase.performance(),
      analytics: firebase.analytics()
    });
  }, []);

  return (
    <FirebaseContext.Provider value={state}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

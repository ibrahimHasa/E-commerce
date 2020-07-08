import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBJV5pDwMtyScBvDv0Fsq211J7ohecp2IY",
  authDomain: "crwn-db-86796.firebaseapp.com",
  databaseURL: "https://crwn-db-86796.firebaseio.com",
  projectId: "crwn-db-86796",
  storageBucket: "crwn-db-86796.appspot.com",
  messagingSenderId: "644646122601",
  appId: "1:644646122601:web:e7a372e3b90accf2725ef8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//this means to get pop up to sig in using google auth provide
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

import config from "./firebaseConfig";

const app = firebase.initializeApp(config);

const db = app.firestore();

async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  let result = await firebase.auth().signInWithPopup(provider);
  return result;
}

export { signInWithGoogle };

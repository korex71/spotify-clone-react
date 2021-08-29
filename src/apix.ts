import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

import config from "./firebaseConfig";

import { ISearchData } from "./contexts/AppContext";

const app = firebase.initializeApp(config);

export const db = app.firestore();

interface IInitialSongStorage {
  userId: string;
  songs: ISearchData;
}

async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  let result = await firebase.auth().signInWithPopup(provider);
  return result;
}

async function addNewSong(userId: string, songs: ISearchData) {
  const data = {
    userId,
    songs: [songs],
  };

  const dbCollection = db.collection("users").doc(userId);

  const doc = await dbCollection.get();

  if (!doc.exists) {
    const document = await dbCollection.set(data);
    console.log(document);
  } else {
    const document = doc.data();

    if (document) {
      let dbSongs: ISearchData[] = document.songs;

      if (dbSongs.find((song) => song.youtubeId === songs.youtubeId)) {
        // Song already exists
        return;
      }

      const inserted = await dbCollection.update({
        songs: [...dbSongs, songs],
      });

      console.log(inserted);
    }
  }

  return;

  const res = await db.collection("users").doc(userId).update(data);

  console.log(res);
}

async function getUserLibrary() {}

export { signInWithGoogle, addNewSong };

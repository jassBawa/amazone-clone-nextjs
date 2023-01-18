import firebase from "firebase/app";

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa6xELECu4gu_4VRSZ--DR4udUxwwBlRc",
  authDomain: "amz-clone-nextjs-a165c.firebaseapp.com",
  projectId: "amz-clone-nextjs-a165c",
  storageBucket: "amz-clone-nextjs-a165c.appspot.com",
  messagingSenderId: "424760221406",
  appId: "1:424760221406:web:78fcb47be252adbdf8ec4f",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export default db;

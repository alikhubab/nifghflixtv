import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV_7dO9Lcp2U4anwjHVWoonrPRwE6uAbM",
  authDomain: "nightflix-c8d26.firebaseapp.com",
  projectId: "nightflix-c8d26",
  storageBucket: "nightflix-c8d26.appspot.com",
  messagingSenderId: "1079720601478",
  appId: "1:1079720601478:web:52bc37dc3f2bc1ffa02e07",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export {
  auth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
export default db;

import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA53nvasaWpNWDJMpRn3-pWhFUsIDoAn9U",
  authDomain: "coinhubcc-2ffab.firebaseapp.com",
  projectId: "coinhubcc-2ffab",
  storageBucket: "coinhubcc-2ffab.appspot.com",
  messagingSenderId: "38457854030",
  appId: "1:38457854030:web:2f1a4e1e1fd2d0ff09db1f",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, logInWithEmailAndPassword, logout };

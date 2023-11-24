import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA6jsJcB3t9JaDE6-xZyhAKdenkofl1ZP4",
  authDomain: "react-portfolio-dashboar-5ab8a.firebaseapp.com",
  projectId: "react-portfolio-dashboar-5ab8a",
  storageBucket: "react-portfolio-dashboar-5ab8a.appspot.com",
  messagingSenderId: "941505245979",
  appId: "1:941505245979:web:1437a742b0f4a2453e99be"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore (app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
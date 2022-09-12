import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDg0OxrGInn3nTY4zSwDiLUTvUBw45ylt0",
  authDomain: "mychatapp-4e676.firebaseapp.com",
  projectId: "mychatapp-4e676",
  storageBucket: "mychatapp-4e676.appspot.com",
  messagingSenderId: "715039550303",
  appId: "1:715039550303:web:8cea50b270b368126364ea",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

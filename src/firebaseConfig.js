// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBz-hz9trgXemotbNtbNpG2QNbPLbYo4SY",
  authDomain: "jersey-store-7ace7.firebaseapp.com",
  projectId: "jersey-store-7ace7",
  storageBucket: "jersey-store-7ace7.appspot.com",
  messagingSenderId: "238278531458",
  appId: "1:238278531458:web:a57abf674a22eedf71179b",
  measurementId: "G-718F473T0P",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

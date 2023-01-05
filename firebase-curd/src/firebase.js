// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsnzjOLoC5brynW8p5VZzwHyNQu9Nv3U4",
  authDomain: "demobve-324913.firebaseapp.com",
  projectId: "demobve-324913",
  storageBucket: "demobve-324913.appspot.com",
  messagingSenderId: "76899468395",
  appId: "1:76899468395:web:2f193c2755b255c1fddd2e",
  measurementId: "G-0H9DE42LMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
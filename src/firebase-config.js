// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzSWxKkaJWDOwA2XIiuYteOwYvG1Sc05o",
  authDomain: "firecrud-599af.firebaseapp.com",
  projectId: "firecrud-599af",
  storageBucket: "firecrud-599af.appspot.com",
  messagingSenderId: "789978542826",
  appId: "1:789978542826:web:017eeb26738857cabc9d93",
  measurementId: "G-6X8179F5VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app)
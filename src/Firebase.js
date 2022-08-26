import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIMfs5zbxgqV2XGHhpZUuNj0X3TxEWokI",
  authDomain: "momo-project-512b0.firebaseapp.com",
  projectId: "momo-project-512b0",
  storageBucket: "momo-project-512b0.appspot.com",
  messagingSenderId: "336823620243",
  appId: "1:336823620243:web:b37336e35f71b893e4b366",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

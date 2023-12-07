// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0dlJqBPkT0cfmA1BolKl88HJfEYKhT7k",
  authDomain: "app-biblioteca-6a399.firebaseapp.com",
  projectId: "app-biblioteca-6a399",
  storageBucket: "app-biblioteca-6a399.appspot.com",
  messagingSenderId: "320990727707",
  appId: "1:320990727707:web:9df6f324933a3b87d3b2be",
  measurementId: "G-TFXWZTVHT0"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);
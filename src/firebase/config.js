// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArAvwamimoyoHC26YgIEUVQQD2iGaY3L0",
  authDomain: "app-biblioteca-2adf9.firebaseapp.com",
  projectId: "app-biblioteca-2adf9",
  storageBucket: "app-biblioteca-2adf9.appspot.com",
  messagingSenderId: "770265578952",
  appId: "1:770265578952:web:516ed021158645510894fd"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);
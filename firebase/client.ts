// Import the functions you need from the SDKs you need
import { initializeApp , getApp,getApps} from "firebase/app";
import {getAuth } from 'firebase/auth';
import{getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnTgpBwxZdg8UA7phjUuTGQDr4Dnid52k",
  authDomain: "prepgo-93adb.firebaseapp.com",
  projectId: "prepgo-93adb",
  storageBucket: "prepgo-93adb.firebasestorage.app",
  messagingSenderId: "958919819385",
  appId: "1:958919819385:web:a979d137b3e72add3614a8",
  measurementId: "G-X0M1NZRNM9"
};

// Initialize Firebase
const app = !getApp.length ? initializeApp(firebaseConfig) : getApp ();
 
export const auth= getAuth(app);
export const db= getFirestore(app);

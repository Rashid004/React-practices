/** @format */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCr8M7waxSFy7ZHOcXHfYoGsgrxTbrNvGc",
  authDomain: "fir-basic-532f3.firebaseapp.com",
  projectId: "fir-basic-532f3",
  storageBucket: "fir-basic-532f3.appspot.com",
  messagingSenderId: "265342274508",
  appId: "1:265342274508:web:12c82a86ebc204e975eb69",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Get Authentication instance
const auth = getAuth(app);

export { app, auth };

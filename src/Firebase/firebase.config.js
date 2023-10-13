// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWJNmiJ5de-H3jFwmlM5HEmEZo4GR7KVI",
  authDomain: "auth-firebase-37bed.firebaseapp.com",
  projectId: "auth-firebase-37bed",
  storageBucket: "auth-firebase-37bed.appspot.com",
  messagingSenderId: "533790688039",
  appId: "1:533790688039:web:5dcc57e89593ca08209f02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default(auth)
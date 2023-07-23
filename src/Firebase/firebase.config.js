// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiOBLUdD96bKbuvurWsc2Y3Tuwgblp01s",
  authDomain: "campus-hive-ab432.firebaseapp.com",
  projectId: "campus-hive-ab432",
  storageBucket: "campus-hive-ab432.appspot.com",
  messagingSenderId: "84111685148",
  appId: "1:84111685148:web:5d394f4f2a669b76d211d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
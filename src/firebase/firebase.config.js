// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY3GgegIlsqTLYJssnKYYuc1YfkMlKLxQ",
  authDomain: "the-dragon-newa.firebaseapp.com",
  projectId: "the-dragon-newa",
  storageBucket: "the-dragon-newa.appspot.com",
  messagingSenderId: "522649360088",
  appId: "1:522649360088:web:05bc7dd189d4890ccf69ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
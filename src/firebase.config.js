// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4GoLhV2smk-65gbmZUiLiFs7KvvsfQtw",
  authDomain: "hekto-2bd80.firebaseapp.com",
  projectId: "hekto-2bd80",
  storageBucket: "hekto-2bd80.firebasestorage.app",
  messagingSenderId: "383646135904",
  appId: "1:383646135904:web:a8d478afb1525502d57505",
  measurementId: "G-WGM1D8BZMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
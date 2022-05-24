// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPcoWWtQcoxawiAr9Bv2u9rEOvYsLy9LY",
  authDomain: "manufacturer-website-6828a.firebaseapp.com",
  projectId: "manufacturer-website-6828a",
  storageBucket: "manufacturer-website-6828a.appspot.com",
  messagingSenderId: "131508703907",
  appId: "1:131508703907:web:1d55a45f1b3a56b8ac2516"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
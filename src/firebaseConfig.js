
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHGk7fqcTXxZtgy7_jkLY7FAI5646DHA0",
  authDomain: "task-884ec.firebaseapp.com",
  projectId: "task-884ec",
  storageBucket: "task-884ec.appspot.com",
  messagingSenderId: "396652050864",
  appId: "1:396652050864:web:2665a4b26c7831c3fe7e75",
  measurementId: "G-YGTZS5V541",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };

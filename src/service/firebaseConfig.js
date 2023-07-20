// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI_yj6x49KcVS_VF_V3fUfRZJVtsGzYrI",
  authDomain: "lab-notes-31200.firebaseapp.com",
  projectId: "lab-notes-31200",
  storageBucket: "lab-notes-31200.appspot.com",
  messagingSenderId: "260573979134",
  appId: "1:260573979134:web:809310206d9ba3a72b60af"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
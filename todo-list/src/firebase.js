// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIfcE7OYlj7btFVYsmbqruZ1vs86zBG-U",
  authDomain: "to-do-list-marput.firebaseapp.com",
  projectId: "to-do-list-marput",
  storageBucket: "to-do-list-marput.firebasestorage.app",
  messagingSenderId: "394463113075",
  appId: "1:394463113075:web:f0578b67f1d08b9aae1f06",
  measurementId: "G-B3XQ9RLRK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export { auth };
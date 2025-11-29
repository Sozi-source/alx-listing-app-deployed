// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7UoDGv4QBIWcXLYMyBSPZNhqrbw1Ra60",
  authDomain: "airbnb-clone-8d8cf.firebaseapp.com",
  projectId: "airbnb-clone-8d8cf",
  storageBucket: "airbnb-clone-8d8cf.firebasestorage.app",
  messagingSenderId: "73396636758",
  appId: "1:73396636758:web:7e87b1b45e6390fe69fff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };

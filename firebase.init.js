// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsw-69z3RWEpRhrJkUAVGt9Mxd4nx0iMY",
    authDomain: "dental-health-ec494.firebaseapp.com",
    projectId: "dental-health-ec494",
    storageBucket: "dental-health-ec494.appspot.com",
    messagingSenderId: "329933137159",
    appId: "1:329933137159:web:8853efba599690c696d1a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth; 
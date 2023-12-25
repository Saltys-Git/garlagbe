// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getDatabase} from 'firebase/database';
import 'dotenv/config';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbpQcuTcUYKqEGYREYXumjusKEwd4ZANo",

    authDomain: "garilagbe-11172.firebaseapp.com",

    projectId: "garilagbe-11172",

    storageBucket: "garilagbe-11172.appspot.com",

    messagingSenderId: "90602137626",

    appId: "1:90602137626:web:a0e66700e7e9ea06b6c9a3",

    measurementId: "G-8H8QV7ZTY6"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
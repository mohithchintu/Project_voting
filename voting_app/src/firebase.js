import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAsejAjDOk1bEKwOvnVlCgucxcTteBwx0k",
    authDomain: "online-voting-6bfb4.firebaseapp.com",
    projectId: "online-voting-6bfb4",
    storageBucket: "online-voting-6bfb4.appspot.com",
    messagingSenderId: "896883607470",
    appId: "1:896883607470:web:ba6e6a17bb5d032401ea3f",
    measurementId: "G-G0R3MRC6ZL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, db, storage, firestore, auth };

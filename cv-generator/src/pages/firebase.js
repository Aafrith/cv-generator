import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';

// Your Firebase configuration (replace with your own project credentials)
const firebaseConfig = {
    apiKey: "AIzaSyBwJWqGqqVgvjEFKkoQ451ogzUxOFkMHEg",
    authDomain: "cv-generator-8625b.firebaseapp.com",
    projectId: "cv-generator-8625b",
    storageBucket: "cv-generator-8625b.appspot.com",
    messagingSenderId: "971031181718",
    appId: "1:971031181718:web:abc123xyz" // Replace with your actual appId from Firebase console if needed
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialize Google Auth provider
export { auth, googleProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword };

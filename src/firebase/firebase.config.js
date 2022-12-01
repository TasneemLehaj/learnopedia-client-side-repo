// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqRTHss5OM817w4yZsxVQOmTpFeGCtngU",
    authDomain: "learnopedia-d1132.firebaseapp.com",
    projectId: "learnopedia-d1132",
    storageBucket: "learnopedia-d1132.appspot.com",
    messagingSenderId: "842625724218",
    appId: "1:842625724218:web:bc67c46d2ec9a726472a03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
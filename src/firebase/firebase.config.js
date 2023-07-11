// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// apiKey: "AIzaSyDTxkHgWbL6QijDTqc17rB18dKOfsAv0wg",
// authDomain: "bistro-boss-b7933.firebaseapp.com",
// projectId: "bistro-boss-b7933",
// storageBucket: "bistro-boss-b7933.appspot.com",
// messagingSenderId: "967601970259",
// appId: "1:967601970259:web:58f788671cb36ed0a13aa6"
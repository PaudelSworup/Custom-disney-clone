import {initializeApp} from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBqEG5Yk55NB5Mcyb0crVTh9k6BQ8VElZQ",
  authDomain: "custom-disney.firebaseapp.com",
  projectId: "custom-disney",
  storageBucket: "custom-disney.appspot.com",
  messagingSenderId: "306265349961",
  appId: "1:306265349961:web:b3ec247c0ccc22d4240498",
  measurementId: "G-Z8G1N4F8LW"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

// export const auth = getAuth(app);

// export const provider = new GoogleAuthProvider();

// const db = app.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export {auth , provider , storage};
// export default db;

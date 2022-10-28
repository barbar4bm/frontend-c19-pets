// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgVuNxcQNLDCto-_62RUE3HjHKG5Gu2fk",
  authDomain: "c19pets-users.firebaseapp.com",
  projectId: "c19pets-users",
  storageBucket: "c19pets-users.appspot.com",
  messagingSenderId: "1057266846192",
  appId: "1:1057266846192:web:498c5b3f44ebfc3a053535"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
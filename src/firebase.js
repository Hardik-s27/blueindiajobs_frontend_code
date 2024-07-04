import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYy2Ek37VhqJWzh3ef1Y7eu0O0Plgce_0",
  authDomain: "blueindia-jobs-61b58.firebaseapp.com",
  projectId: "blueindia-jobs-61b58",
  storageBucket: "blueindia-jobs-61b58.appspot.com",
  messagingSenderId: "39981748642",
  appId: "1:39981748642:web:1a207ba7a3ae86cf00e2fb"
};

  const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default firebase;

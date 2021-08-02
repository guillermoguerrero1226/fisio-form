import firebase from "firebase";

// firebase init - add your own config here
const configOptions = {
  apiKey: "AIzaSyD2ddlJ0RJyRSR9XPALWWhaoNOvv2DT5ww",
  authDomain: "fisio-forms.firebaseapp.com",
  projectId: "fisio-forms",
  storageBucket: "fisio-forms.appspot.com",
  messagingSenderId: "752278091631",
  appId: "1:752278091631:web:7d4fcad9d52393b5701a9a",
  measurementId: "G-YK0Z62LHD3",
};
firebase.initializeApp(configOptions);

// utils
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// export utils/refs
export { db, auth, storage };

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCzIbI2Hd3bSidXHMCtfinji_unSlgtLfI",
    authDomain: "clone-aaec0.firebaseapp.com",
    databaseURL: "https://clone-aaec0.firebaseio.com",
    projectId: "clone-aaec0",
    storageBucket: "clone-aaec0.appspot.com",
    messagingSenderId: "374262020440",
    appId: "1:374262020440:web:7ce11ff6cc8f0b968ccd2d",
    measurementId: "G-CYB1R7338C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {
    db,
    auth
};
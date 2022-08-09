import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig =  firebase.initializeApp( {
    apiKey: "AIzaSyB2Tj0vEQmVYWZioYEnsV_T_EteyIoDOeU",
    authDomain: "rider-verify.firebaseapp.com",
    projectId: "rider-verify",
    storageBucket: "rider-verify.appspot.com",
    messagingSenderId: "933124671350",
    appId: "1:933124671350:web:699b626bbf968fbe279c57",
    measurementId: "G-6YBD2GC6KH"
  });

export default firebaseConfig;

export const authentication = firebase.auth();


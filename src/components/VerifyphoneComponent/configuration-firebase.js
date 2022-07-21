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

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// const facebookprovider = new firebase.auth.FacebookAuthProvider();
// facebookprovider.setCustomParameters({ prompt: 'select_account' });

// export const signInwithFacebook = () => auth.signInWithPopup(facebookprovider);

// export const firestore = firebase.firestore();

// export const createUserDocument = async (user, additionalData) => {
//   if (!user) return;

//   const userRef = firestore.doc(`users/${user.uid}`);

//   const snapshot = await userRef.get();

//   if (!snapshot.exists) {
//     const { email } = user;
//     const { displayName } = additionalData;

//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt: new Date(),
//       });
//     } catch (error) {
//       console.log('Error in creating user', error);
//     }
//   }
// };


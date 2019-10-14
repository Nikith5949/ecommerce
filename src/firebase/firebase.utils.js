import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const config={
    apiKey: "AIzaSyAveFIrEUPe6hWnfXNhCF9aGvgVyVcrtos",
    authDomain: "crwn-db-45bc7.firebaseapp.com",
    databaseURL: "https://crwn-db-45bc7.firebaseio.com",
    projectId: "crwn-db-45bc7",
    storageBucket: "crwn-db-45bc7.appspot.com",
    messagingSenderId: "235671295312",
    appId: "1:235671295312:web:97b30a31185521ea984855",
    measurementId: "G-W6HF5GM94G"
  };


  export const createUserProfileDocument = async (userAuth, additionalData)=>{

    if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      //console.log(userAuth);
      const snapshot = await userRef.get();
      if(!snapshot.exists){
          const {displayName, email} = userAuth;
          const createdAt = new Date();
          try{
                await userRef.set({displayName,email,createdAt,...additionalData})
          }catch(error){
            console.log("error creating useer",error);
          }
      }
    return userRef;
  }
  firebase.initializeApp(config);
  export const auth =firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
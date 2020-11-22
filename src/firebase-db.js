import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase 
  .initializeApp({
   apiKey: "AIzaSyAAuxWmtNtN8zetDIbC79DJISsIePvzZTg",
    authDomain: "cat-collection-d7fb5.firebaseapp.com",
    databaseURL: "https://cat-collection-d7fb5.firebaseio.com",
    projectId: "cat-collection-d7fb5",
    storageBucket: "cat-collection-d7fb5.appspot.com",
    messagingSenderId: "102016421499",
    appId: "1:102016421499:web:3e2c1d857dfc5b02681cde",
  })
    .firestore()
export const postRef = db.collection('posts')


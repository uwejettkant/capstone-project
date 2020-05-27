import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyB9wQqKU3xrWc94kti4eSjnzKdEOX-FPgY',
  authDomain: 'import-ganz-einfach-b9ac3.firebaseapp.com',
  databaseURL: 'https://import-ganz-einfach-b9ac3.firebaseio.com',
  projectId: 'import-ganz-einfach-b9ac3',
  storageBucket: 'import-ganz-einfach-b9ac3.appspot.com',
  messagingSenderId: '32963779729',
  appId: '1:32963779729:web:1bd1cb5ec0771ef314b330',
}

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

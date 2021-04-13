import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAwryLM-YzDujpUyOe8HS59WSlG2m9GMT0",
    authDomain: "todo-app-631d2.firebaseapp.com",
    projectId: "todo-app-631d2",
    storageBucket: "todo-app-631d2.appspot.com",
    messagingSenderId: "323674665552",
    appId: "1:323674665552:web:cc92e9442ba0331f529755",
    measurementId: "G-BS0MS3K4E6"
})

const db = firebaseApp.firestore();

export default db;

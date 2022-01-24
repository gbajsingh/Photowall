import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD9y5whTiy30h5FBgda6WTEE_8tpplWVtE",
    authDomain: "photowall-8202d.firebaseapp.com",
    databaseURL: "https://photowall-8202d-default-rtdb.firebaseio.com",
    projectId: "photowall-8202d",
    storageBucket: "photowall-8202d.appspot.com",
    messagingSenderId: "539297657949",
    appId: "1:539297657949:web:4b3d493bed4d2cde2489b4",
    measurementId: "G-SXJ57YPLFE"
  };

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export {database}
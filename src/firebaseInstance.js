const firebase = require("firebase");

firebase.initializeApp({
   apiKey: "AIzaSyDM1b5xHhvNkIPMs2cQuEoAZNGsKMfoNvA",
   authDomain: "my-portfolio-e2bc3.firebaseapp.com",
   databaseURL: "https://my-portfolio-e2bc3.firebaseio.com",
   projectId: "my-portfolio-e2bc3",
   storageBucket: "my-portfolio-e2bc3.appspot.com",
   messagingSenderId: "493406887573"
});

const db = firebase.firestore();

db.settings({
   timestampsInSnapshots: true
});

export default db;
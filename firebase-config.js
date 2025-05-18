// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyAPRIBj_mE3FQgasLc-SlWO1rSG8y6toBc",
    authDomain: "instrumentor-d1172.firebaseapp.com",
    databaseURL: "https://instrumentor-d1172-default-rtdb.firebaseio.com",
    projectId: "instrumentor-d1172",
    storageBucket: "instrumentor-d1172.firebasestorage.app",
    messagingSenderId: "900604142266",
    appId: "1:900604142266:web:30805c9f7444aea6c3d883"
  };
  
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();  // Add this for Firestore
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
  import { getAuth } from "firebase/auth";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDN9xQjQG86jWJOHeIGSLaGbtTT9QDehCc",
    authDomain: "login-example-1bbe9.firebaseapp.com",
    projectId: "login-example-1bbe9",
    storageBucket: "login-example-1bbe9.firebasestorage.app",
    messagingSenderId: "586949972656",
    appId: "1:586949972656:web:85ad659b4b07a876556175",
    measurementId: "G-36MVHFQX8F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  //input
  const email=document.getElementById('email').value;
  const password=document.getElementById('password').value;

  // submit
  const submit=document.getElementById('submit');
  submit.addEventListener('click', function(event){
    event.preventDefault();
  

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    
  })
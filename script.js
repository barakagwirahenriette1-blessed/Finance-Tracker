// IMPORT FIREBASE MODULES
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import { 
  getStorage, 
  ref, 
  getDownloadURL 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";


// 🟢 YOUR FIREBASE CONFIG
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};


// 🔥 INITIALIZE FIREBASE
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);


// 🖼 LOAD BACKGROUND FROM STORAGE
const bgRef = ref(storage, "backgrounds/final_bg.jpg");

getDownloadURL(bgRef).then((url) => {
    document.body.style.backgroundImage = `url(${url})`;
});


// 🟦 SELECT INPUT ELEMENTS
const nameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#password");
const createBtn = document.querySelector(".create-btn");
const signInBtn = document.querySelector(".signin-btn");


// 🟢 CREATE ACCOUNT FUNCTION
createBtn?.addEventListener("click", () => {
    
    const email = emailInput.value;
    const password = passInput.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Account Created Successfully!");
            window.location.href = "dashboard.html"; // redirect after signup
        })
        .catch((error) => {
            alert(error.message);
        });
});


// 🔵 SIGN-IN FUNCTION
signInBtn?.addEventListener("click", () => {

    const email = emailInput.value;
    const password = passInput.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // redirect after login
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need
import { signInWithEmailAndPassword , getAuth} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYwcxJe29kyaq5fpeJQOMBrMJGLnHVfhg",
  authDomain: "adminedashboard.firebaseapp.com",
  projectId: "adminedashboard",
  storageBucket: "adminedashboard.appspot.com",
  messagingSenderId: "961600049014",
  appId: "1:961600049014:web:1d0dc17108c7008dc5b457"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const formulaire= document.getElementById("loginform");
function checklogin(e){
  e.preventDefault();
  const email =document.getElementById("email").value;
  const password =document.getElementById("password").value;

  console.log(email,password)
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    localStorage.setItem("cnx","A");
    alert("Sign In succefully ! please press OK to continue ");
    window.location = '/adminDashboard.html';

  })


formulaire.addEventListener("submit",(e)=>checklogin(e))}

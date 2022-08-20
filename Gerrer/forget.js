// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAuth , sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";


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
const auth= getAuth();

const formulaire = document.getElementById("resetPwd");

function Resetpassword(e){
  e.preventDefault();
    const email = document.getElementById("email").value;
    console.log(email);
    if(email.trim()===""){alert("please fill the form!")}
    else{
      sendPasswordResetEmail(auth,email)
      .then(()=>{
          alert(" a link has been sended to your email !")
      })
      .catch(()=>{
          console.log(error);
          alert("try agan ! , an error happen")
      })
    }

}

formulaire.addEventListener('submit' , (e)=>Resetpassword(e))
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase , ref , set } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYwcxJe29kyaq5fpeJQOMBrMJGLnHVfhg",
  authDomain: "adminedashboard.firebaseapp.com",
  databaseURL:" https://adminedashboard-default-rtdb.europe-west1.firebasedatabase.app/" ,
  projectId: "adminedashboard",
  storageBucket: "adminedashboard.appspot.com",
  messagingSenderId: "961600049014",
  appId: "1:961600049014:web:1d0dc17108c7008dc5b457"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const myForm = document.getElementById("myForm")
 function submitForm(e){
  e.preventDefault();
  //* get all form data
  const email = document.getElementById("Email").value ;
  const pwd = document.getElementById("Password").value ;
  const adress = document.getElementById("Adress").value ;
  const city = document.getElementById("City").value ;
  const zip = document.getElementById("Zip").value ;

  
  console.log(email,pwd,adress,city,zip)

  if(
    email.trim().length ===0 ||
    pwd.trim().length ===0 ||
    adress.trim().length ===0 ||
    city.trim().length ===0 ||
    zip.trim().length ===0 
  ) {
    alert("remplir tous les champ svp!");
  }
  else{
    createUser(email,pwd,adress,city,zip)
    alert("user creat successfully :D!");
    myForm.reset();

  }
 }
 
 function createUser (email,pwd,adress,city,zip){
  const db = getDatabase();
    set(ref(db,'user/'+ email.slice(0,4)+Math.floor(Math.random()*100).toString()) ,{
      EMAIL : email,
      PASSWORD : pwd ,
      ADRESS : adress , 
      CITY : city ,
      ZIP : zip 
    })

 }


myForm.addEventListener("submit",(e)=>submitForm(e))
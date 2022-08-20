import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase , ref , onValue } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

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
const db = getDatabase(app);

function affichageUser(){
  const allUser = ref(db,"user/");
  onValue(allUser,(snapshot)=>{
    const data = snapshot.val()
    var keys = Object.keys(data);
    for (let i=0 ; i <keys.length ; i++){
      var current_user = keys[i];

var email = data[current_user].EMAIL  ;
var Password= data[current_user].PASSWORD  ;
var adress= data[current_user].ADRESS  ;
var city= data[current_user].CITY  ;
var zip= data[current_user].ZIP  ;
console.log(email,Password,adress,city,zip)
 var element= document.createElement("div");
 element.innerHTML=
 '<div class="mb-3 w-75">'
 +'<i class=" bi bi-person-check-fill"> </i>'+
 +'<span class="text-success text-decoration-underline">'+current_user+'</span>'
 +'<div>'
 +'<h3><span class="text-primary">email:</span>'+email+'</h3>'
 +'</div>'
 +'<p class="mb-0 "> town:'+adress+'</p>'
 +'<p class="mb-0 ">city:'+city+'</p>'
 +'<p class="mb-0 ">zip_code:'+zip+'</p>'
 document.getElementById('dashbord').appendChild(element);

    }
  })
}

affichageUser()
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase,get , ref , remove } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const db =getDatabase(app);
const myForm = document.getElementById('deletForm');

function deletuser(e){
  e.preventDefault();
  const userId = document.getElementById('userToDelete').value;
  if(userId.trim().length <1){
    alert("user not found ! ")
    
  }
  else{
    const userRef = ref ( db, "user/" + userId);
    get(userRef)
    .then((result)=>{
      if(userId.exists()){
        remove(userRef).then(()=> {
          alert("user:"+ userId+"deleted successfully !")
          myForm.reset()
        })
      }
    })
    .catch((error)=>{alert("try again , error happend")});
    console.log(error)
  }


}


myForm.addEventListener('submit' , (e)=>deletuser(e))
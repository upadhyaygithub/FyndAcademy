import { initializeApp , } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword , signOut} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDaEoTn2aH4eOY83Z2nz9h064cwIN-nPnc",
  authDomain: "formlogin-78dfd.firebaseapp.com",
  projectId: "formlogin-78dfd",
  storageBucket: "formlogin-78dfd.appspot.com",
  messagingSenderId: "820418531815",
  appId: "1:820418531815:web:c3443d46832051d8f8ad42"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.getElementById('reg-btn').addEventListener('click',function () {
    document.getElementById('register-div').style.display="inline";
    document.getElementById('login-div').style.display="none";
   
    
});

document.getElementById('log-btn').addEventListener('click',function () {
    document.getElementById('register-div').style.display="none";
    document.getElementById('login-div').style.display="inline";
   
    
});


document.getElementById('login-btn').addEventListener('click',function () {
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, loginEmail,  loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById('login-div').style.display="none";
    document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully..!";

   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    document.getElementById("result-box").style.display="inline";
    document.getElementById('login-div').style.display="none";
    document.getElementById("result").innerHTML="Something Wrong ! <br>"+errorMessage;
  });
});






  document.getElementById('register-btn').addEventListener('click',function () {
    const registerEmail = document.getElementById("register-email").value;
    const registerPassword = document.getElementById("register-password").value;
  
    createUserWithEmailAndPassword(auth, registerEmail,  registerPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById("result-box").style.display="inline";
      document.getElementById('register-div').style.display="none";
      document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was Registerd Successfully..!";
  
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
  
      document.getElementById("result-box").style.display="inline";
      document.getElementById('register-div').style.display="none";
      document.getElementById("result").innerHTML="Something Wrong. ! <br>"+errorMessage;
    });
});


document.getElementById('log-out-btn').addEventListener('click',function () {

    signOut(auth).then(() => {
        document.getElementById("result-box").style.display="none";
        document.getElementById('login-div').style.display="inline";
      }).catch((error) => {
        document.getElementById("result").innerHTML="Something Wrong. ! <br>"+errorMessage;
      });


});


  







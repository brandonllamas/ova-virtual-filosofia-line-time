var firebaseConfig = {
  apiKey: "AIzaSyAjzvhe_Oie5NADCA7y-8QzR1xfNp1lZPk",
  authDomain: "linetime-15cbe.firebaseapp.com",
  databaseURL: "https://linetime-15cbe.firebaseio.com",
  projectId: "linetime-15cbe",
  storageBucket: "linetime-15cbe.appspot.com",
  messagingSenderId: "956926205603",
  appId: "1:956926205603:web:e8eae012049e8b9bdbe916",
  measurementId: "G-H3YCTSEVNB",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var user = firebase.auth().currentUser;
var pass2;
var email;
function SigIn() {
  var email = document.getElementById("email2").value;
  var password = document.getElementById("password2").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

      // ...
    });
  //entrar despues de logearse
  firebase
    .auth()
    .signInWithEmailAndPassword(email, email)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
}

function login() {
  var emailLogin = document.getElementById("email").value;
  pass2 = document.getElementById("password").value;
  sessionStorage.setItem("email", emailLogin);
  sessionStorage.setItem("password", pass2);

  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function () {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      myFunction();
      firebase.auth().signInWithEmailAndPassword(emailLogin, pass2);

      const promiseA = firebase
        .auth()
        .signInWithEmailAndPassword(emailLogin, pass2)
        .then((user) => {
          location = "./LineTime.html"; //Url aqui
        })
        .catch((error) => {
          console.error(error);
        });
      promise.catch((e) => alert(e.message));
      myFunction();
      location = "./LineTime.html"; //Url aqui
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // console.log(errorCode);
      //console.log(errorMessage);
    });
}

function observador() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
   
      // User is signed in.
      var displayName = user.displayName;
      mail = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log(displayName);

      // ...
    } else {
      // User is signed out.
      // ...

    }
  });
}
function CerrarSession() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
      location = "./index.html"; //Url aqui
    })
    .catch(function (error) {
      // An error happened.
      console.log(error);
    });
}

function pasarUser() {
  var EmailPersistencia;
  var Password23;
  EmailPersistencia = sessionStorage.getItem("email");
  Password23 = sessionStorage.getItem("password");
  console.log(EmailPersistencia);
  console.log(Password23);

  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function () {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.

      firebase
        .auth()
        .signInWithEmailAndPassword(EmailPersistencia, Password23)
        .then((user) => {
          location = "./pags/user/OptionsUsers.html"; //Url aqui
        })
        .catch((error) => {
          console.error(error);
        });
      promise.catch((e) => alert(e.message));
      location = "./pags/user/OptionsUsers.html"; //Url aqui
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  location = "./pags/user/OptionsUsers.html";
}

function CambiarNickName1() {
  var user = firebase.auth().currentUser;
  var nickname = document.getElementById("nickname").value;
  user
    .updateProfile({
      displayName: nickname,
    })
    .then(function () {
      // Update successful.
      alert(" nombre de usuario actualizado");
      overlay2.classList.remove("active");
      popup2.classList.remove("active");

      overlay3.classList.add("active");
      popup3.classList.add("active");
    })
    .catch(function (error) {
      // An error happened.
      console.log(error);
    });
}
function validarDatos() {
  if (user != null) {
    user.providerData.forEach(function (profile) {
    

      document.getElementById("nombreUsuario").innerHTML =
        "-Nombre de usuario: " +
        profile.displayName +
        '<button><i class="far fa-edit"></button>';
      document.getElementById("CorreoUsuario").innerHTML = profile.email;
    });
  } else {
    
    document.getElementById("nombreUsuario").innerHTML = "-no hay nada mk";
    document.getElementById("CorreoUsuario").innerHTML = "nel perro";
  }
}
observador();

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "block";
}

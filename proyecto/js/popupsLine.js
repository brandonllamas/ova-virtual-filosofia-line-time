var overlay = document.getElementById("overlay"),
  overlay2 = document.getElementById("overlay2"),
  overlay3 = document.getElementById("overlay3"),
  popup = document.getElementById("popup"),
  popup2 = document.getElementById("popup2"),
  popup3 = document.getElementById("popup3"),
  btnCerrarPopup = document.getElementById("btn-cerrar-popup");


window.onload = function Cargar() {
  overlay.classList.add("active");
  popup.classList.add("active");
};


btnCerrarPopup.addEventListener("click", function (e) {
  e.preventDefault();
  var user = firebase.auth().currentUser;

  if (user != null) {
    user.providerData.forEach(function (profile) {
      /*
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);*/
      console.log("jejeje "+profile.displayName );
      if (profile.displayName == null) {
        overlay.classList.remove("active");
        popup.classList.remove("active");

        overlay2.classList.add("active");
        popup2.classList.add("active");
        
      } else {
        overlay.classList.remove("active");
        popup.classList.remove("active");
        console.log("lol");
      }
    });
  }else{
    overlay.classList.remove("active");
        popup.classList.remove("active");
  }
});

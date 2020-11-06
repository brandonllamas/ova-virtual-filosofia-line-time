var overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup')
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');
	
window.onload= function Cargar(){

    overlay.classList.add('active');
  popup.classList.add('active');
}


btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();

	overlay.classList.remove('active');
	popup.classList.remove('active');

validarDatos();

});


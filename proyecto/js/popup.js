var overlay = document.getElementById('overlay'),
	overlay2 =document.getElementById('overlay2'),
	overlay3 =document.getElementById('overlay3'),
	overlay4 =document.getElementById('overlay4'),
	overlay5 =document.getElementById('overlay5'),
	popup = document.getElementById('popup'),
	popup2 = document.getElementById('popup2'),
	popup3 = document.getElementById('popup3'),
	popup4 = document.getElementById('popup4'),
	popup5 = document.getElementById('popup5'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
	btnSi = document.getElementById('btn-si-popup'),
	btnNo = document.getElementById('btn-no-popup'),
	btnSiguiente2Popup = document.getElementById('btn-siguiente2-popup'),
	btnRegistrar = document.getElementById('Registrar'),
	btnSiguientePopup = document.getElementById('btn-siguiente-popup');
window.onload= function Cargar(){

    overlay.classList.add('active');
  popup.classList.add('active');
}


btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();

	overlay.classList.remove('active');
	popup.classList.remove('active');
});

btnSiguientePopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');

	overlay2.classList.add('active');
  	popup2.classList.add('active');
});
btnSi.addEventListener('click', function(e){
	e.preventDefault();

	overlay2.classList.remove('active');
	popup2.classList.remove('active');

	overlay3.classList.add('active');
  	popup3.classList.add('active');
});
btnNo.addEventListener('click', function(e){
	e.preventDefault();

	overlay3.classList.remove('active');
	popup3.classList.remove('active');

	overlay4.classList.add('active');
  	popup4.classList.add('active');
});
btnSiguiente2Popup.addEventListener('click', function(e){
	e.preventDefault();

	overlay4.classList.remove('active');
	popup4.classList.remove('active');

	overlay5.classList.add('active');
  	popup5.classList.add('active');
});
btnRegistrar.addEventListener('click', function(e){
	e.preventDefault();

	overlay5.classList.remove('active');
	popup5.classList.remove('active');

	overlay3.classList.add('active');
  	popup3.classList.add('active');
});
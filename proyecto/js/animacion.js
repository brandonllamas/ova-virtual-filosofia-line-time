const contenedor = document.querySelector('#contenedor');
//aqui vamos al boton menu y decimos que este pendiente cuando le den click
document.querySelector('#boton-menu').addEventListener('click', () => {
//aqui le decimos que al contenedor le ponga la clase active si no tiene o la quite si ya la tiene
contenedor.classList.toggle('active');
});

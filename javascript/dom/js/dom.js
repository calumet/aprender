// Document Object Model en JavaScript.

// Toda la aplicación se ejecuta dentro de una función para hacer que las variables
// sean privadas y sólo sean visibles dentro de ella.
var aplicacion = function () {

  // Crear un nuevo elemento.
  var main = document.querySelector('main');
  var miBoton = document.createElement('button');
  miBoton.innerHTML = 'Un botón nuevo';
  main.appendChild(miBoton);

  // Eliminar un elemento.
  var icono = document.querySelector('img');
  icono.remove();

  // Cambiar estilos CSS.
  var h1 = document.querySelector('h1');
  h1.style.color = 'red';

  var textos = document.querySelectorAll('.texto');
  for (var i = 0; i < textos.length; i++) {
    textos[i].style.fontSize = '30px';
  }
};

aplicacion();

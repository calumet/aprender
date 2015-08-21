// Funciones en JavaScript.

// Clase: Function
// Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
// - Las funciones definen un tipo de dato, pero son objetos también.
// - Una función puede recibir en los parámetros cualquier tipo de dato y puede
// retornar cualquier tipo de dato. No se especifica en ningún lado.

//
// Declaración.
//

function funcion1 () {
  //
}

var funcion2 = function () {
  //
};

var objeto1 = {

  metodo: function () {
    //
  }
};


//
// Polimorfismo.
//

// No existe polimorfismo en JavaScript. Una misma función puede recibir o no,
// todos sus parámetros. Dentro de la función se debe verificar los parámetros.
// Si un parámetro no fue envíado en una función, ésta valdrá undefined, al
// evaluarla en un condicional dará false, al negarla dará true. Así podremos
// saber si un parámetro fue enviada o no.

var sumar = function (a, b) {
  if (!a) a = 0;
  if (!b) b = 0;
  var c = a + b;
  return c;
};

console.log(sumar(120, 30));  // 150
console.log(sumar(75));  // 75
console.log(sumar());  // 0


//
// Invocación y retorno.
//

// Si recibe dos objetos, retorna un nuevo objeto. Si recibe dos números, retorna
// dos números.
var multiplicar = function (a, b) {
  if (typeof a === 'object' && typeof b === 'object') {
    var c = {
      numero: a.numero * b.numero
    };
    return c;
  } else {
    var c = a * b;
    return c;
  }
};

var n1 = 4;
var n2 = 6;
var o1 = {prop: true, numero: 4};
var o2 = {prop: false, numero: 3};

console.log(multiplicar(n1, n2));  // 24
console.log(multiplicar(o1, o2));  // {numero: 12}

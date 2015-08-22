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
// Visibilidad de variables.
// Ejemplo tomado de Douglas Crockford, Javascript The Good Parts, página 36.
//

// Contexto de variables por función.
var fn1 = function () {
  var a = 3;
  var b = 5;

  var fnInterna = function () {
    var b = 7;
    var c = 11;
    // En este punto, a vale 3, b vale 7, y c vale 11

    a += b + c;
    // En este punto, a vale 21, b vale 7, y c vale 11
  };
  // En este punto, a vale 3, b vale 5, y c no está definida

  fnInterna();
  // En este punto, a vale 21, b vale 5
};

// No hay contextos por bloques, sólo por funciones.
var fn2 = function () {
  var a = 10;

  if (true) {
    var b = 20;
    // En este punto, a y b son visibles.
  }
  // En este punto, a y b son visibles.

  for (var i=0; i<3; i++) {
    var c = 30;
    // En es punto, a, b y c son visibles.
  }
  // En es punto, a, b y c son visibles.

  var fn = function () {
    var d = 40;
    // En es punto, a, b, c y d son visibles.
  };
  // En es punto, a, b y c son visibles, pero d no.
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


//
// Paso de variables.
//

// Las variables de tipo primitivo se pasan por copia, mientras que las variables
// tipo objeto se pasan por referencia.

// Pasado por valor.
var a = 'un string';
var b = a;
b = 'string cambiado';

if (a === b) console.log('iguales');
else         console.log('desiguales');  // 'desiguales'

// Pasado por referencia.
var c = {};
var d = c;
d.cambiado = true;

if (c === d) console.log('iguales');  // 'iguales'
else         console.log('desiguales');

// Pasado por valor en una función.
var fn1 = function (primitivo) {
  primitivo = 50;
};
var e = 34;
fn1(e);
console.log(e);  // 34

// Pasado por referencia en una función.
var fn2 = function (objeto) {
  objeto.cambiado = true;
};
var objeto = {
  cambiado: false
};
fn2(objeto);
console.log(objeto.cambiado);  // true

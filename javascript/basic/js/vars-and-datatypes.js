// Variables y tipos de datos en JavaScript.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

//
// Palabras reservadas de lenguaje.
//

/*
Estas palabras no deben ser usadas para nombres de variables, parámetros, propiedades, etc.

abstract boolean break byte case catch char class const continue debugger default
delete do double else enum export extends false final finally float for function goto
if implements import in instanceof int interface long native new null package private
protected public return short static super switch synchronized this throw throws
transient true try typeof var volatile void while with
*/


//
// Declaración de variables.
//

var a;
var b, c, d;

var e = 10;
var f = 20, g = 30, h = 40;


//
// Tipos de datos primitivos (inmutables).
//

// undefined es un tipo de dato que se le asigna a las variables de datos cuando
// se han declarado pero no definido. Los dos siguientes tienen el mismo valor.

var esUndefined1;
var esUndefined2 = undefined;

// null es un tipo de dato que representa vacío.

var esNulo = null;

// Los booleanos.
// Clase: Boolean

var booleano1 = true;
var booleano2 = false;

// Los números son números flotantes de doble precisión de 64 bits.
// Clase: Number

var numero1 = 10;
var numero2 = -7.54e3;
var noEsNumero = NaN;
var esInfinito1 = Infinity;
var esInfinito2 = -Infinity;

// Los strings son cadenas de carácteres inmutables que pueden ser creadas con
// comillas simples o dobles.
// Clase: String

var texto1 = 'con comillas simples';
var texto2 = "con comillas dobles";
var texto3 = 'carácteres especiales \n \r \\ \' \" ...';
var texto4 = 'con "comillas" anidadas \'si es\' necesario';
var texto5 = "con 'comillas' anidadas \"si es\" necesario";


//
// Objetos literales.
// Clase: Object
//

/*
  Los objetos pueden tener cualquier tipo de propiedad y anidar cualquier tipo
  de dato, incluso otros objetos. Los objetos literales son prácticamente nuevos
  objetos sin partir de clases.
 */

// Crear un objeto literal.
var persona = {
  nombre: 'Brendan Eich',
  'fechaNacimiento': 1962,
  "lugarNacimiento": 'Pittsburgh',
  noLeGusta: 'blah blah blah',
  educacion: {
    universidad: 'University of Illinois at Urbana-Champaign',
    titulo: 'master\'s degree'
  }
};
var ayudante = 'lugarNacimiento';

// Conseguir datos.
console.log(persona.nombre);  // 'Brendan Eich'
console.log(persona['lugarNacimiento']);  // 'Pittsburgh'
console.log(persona[ayudante]);  // 'Pittsburgh'
console.log(persona.educacion.universidad);  // 'University of Illinois at Urbana-Champaign'

// Modificar dato.
persona.fechaNacimiento = 1961;

// Borrar dato.
delete persona.noLeGusta;


//
// Funciones.
// Clase: Function
//

var sumar = function (a, b) {
  var c = a + b;
  return c;
};

function multiplicar (a, b) {
  var c = a * b;
  return c;
}

var objeto5 = {
  prop1: true,
  prop2: 750,
  restar: function (a, b) {
    var c = a - b;
    return c;
  }
};

console.log(sumar(5, 5));  // 10
console.log(multiplicar(5, 4));  // 20
console.log(objeto5.restar(100, 30));  // 70


//
// Variables mutables.
//

var var1 = 6742;
console.log(var1);  // 6742

var1 = 'es string';
console.log(var1);  // 'es string'

var1 = true;
console.log(var1);  // true


//
// Averiguar el tipo de dato.
//

// Sino se trata de algún tipo de dato como los siguientes, entonces es un objeto.
// Por ejemplo: los arrays, las expresiones regulares, etc.

var b = true;
var n = 10;
var s = 'string';
var o = {};
var nl = null;
var ud = undefined;
var f = function () {};

console.log(typeof b);  // 'boolean'
console.log(typeof n);  // 'number'
console.log(typeof s);  // 'string'
console.log(typeof o);  // 'object'
console.log(typeof nl);  // 'object'
console.log(typeof ud);  // 'undefined'
console.log(typeof f);  // 'function'

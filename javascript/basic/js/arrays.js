// Arrays en JavaScript.

/*
  Todos los objetos pueden ser manipulados como los objetos literales (aunque existen
  algunas excepciones). Si una variable no es un dato primitivo inmutable, entonces
  es un objeto, y los objetos son mutables. De la misma manera como un objeto literal
  se puede manipular, los demás objetos como los arrays, las fechas, las expresiones
  regulares, las funciones, entre muchos otros, también se pueden manipular.

  Veremos en caso de los arrays.
 */

//
// Arrays.
// Clase: Array
// Referencia: http://devdocs.io/javascript-array/
//

var array1 = [];
var array2 = new Array();
var array3 = [
  10,
  true,
  'un string',
  null,
  undefined,
  {},
  [
    -75,
    false
  ]
];

// Conseguir un valor y modificarlo.
console.log(array3[2]);  // 'un string'
console.log(array3[6][0]);  // -75
array3[6][0] = 'dato cambiado';
console.log(array3[6][0]);  // 'dato cambiado'

// Array.length - Permite saber la cantidad de elementos que tiene el array.
console.log(array1.length);  // 0
console.log(array2.length);  // 0
console.log(array3.length);  // 7

// Array.push() - Agregar un elemento al final del array.
console.log(array1.length);  // 0
array1.push('nuevo elemento');
array1.push(730);
console.log(array1.length);  // 2
console.log(array1[0]);  // 'nuevo elemento'

// Array.pop() - Extrae el último elemento del array y lo devuelve.
console.log(array1[array1.length - 1]);  // 730
var pop1 = array1.pop();
console.log(pop1);  // 730
console.log(array1.length);  // 1

// Entre muchos otros métodos...

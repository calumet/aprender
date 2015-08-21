// Cadenas de carácteres.

/*
  Los tipos de datos primitivos: números, booleanos y strings se comportan también
  como objetos. Esto quiere decir que tienen métodos y propiedades que nos permiten
  manipularlos.

  Sino se puede manipular con sus propios métodos, entonces se pueden utilizar sus
  clases para hacerlo o dadas por JavaScript como métodos globales.

  Estudiaremos el caso de los strings.
 */

//
// Cadenas de carácteres.
// Clase: String
// Referencia: http://devdocs.io/javascript-string/
//

var nombre = 'JavaScript, also known as ECMAScript, is a dynamic programming language.';

var lontigud = nombre.length;
console.log(lontigud);  // 72

var recortado = nombre.substring(0, 10);
console.log(recortado);  // JavaScript

var encontrado = nombre.indexOf('programming');
console.log(encontrado);  // 51 (Posición del primer carácter de lo buscado)

var reemplazado = nombre.replace(', also known as ECMAScript', '');
console.log(reemplazado);  // 'JavaScript, is a dynamic programming language'

var mayusculas = nombre.toUpperCase();
console.log(mayusculas);  // JAVASCRIPT, ALSO KNOWN AS ECMASCRIPT, IS A DYNAMIC PROGRAMMING LANGUAGE.

// Entre muchos otros métodos...

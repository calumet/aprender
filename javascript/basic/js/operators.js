// Operadores en JavaScript.

//
// Multiplicación, división y módulo.
//

var n1 = 100;
var n2 = 25;

console.log(n1 * n2);  // 2500
console.log(n1 / n2);  // 4
console.log(n1 % n2);  // 0


//
// Adición/concatenación, substracción.
//

var n3 = 100;
var n4 = 25;

console.log(n3 + n4);  // 125
console.log(n3 - n4);  // 75

var s1 = 'JavaScript';
var s2 = 'Es Increible!';
var s3 = '750';

// Concatenación de strings.
console.log(s1 + ' ' + s2);  // 'JavaScript Es Increible!'

console.log(s1 + n3);  // 'JavaScript100'
console.log(s3 + n3);  // '750100'
console.log(n3 + s1);  // '100JavaScript'


//
// Igualdad y desigualdad.
//

var n5 = 50;
var n6 = 153;

console.log(10 > 5);  // true
console.log(n5 < 200);  // true

console.log(n6 >= n5);  // true
console.log(5 <= 10);  // true

// Utilizar === en vez de == (http://stackoverflow.com/questions/3804005).
console.log(n5 === 50);  // true
console.log(n5 !== 794);  // true


//
// Operadores lógicos.
//

var b1 = true;
var b2 = true;
var b3 = false;
var b4 = false;

// Negación.
console.log(!false);  // true
console.log(!b1);  // false

// AND lógico.
console.log(b1 && b2);  // true
console.log(b1 && b3);  // false

// OR lógico.
console.log(b1 || b3);  // true
console.log(b3 || b4);  // false


//
// Asignaciones.
//

var n7 = 725;

console.log(n7);  // 725
console.log(n7++);  // 725
// Después de evaluarse, n7 es 726.

console.log(n7);  // 726
console.log(++n7);  // 727

// Tiene el mismo comportamiento que variable-- o --variable, pero substraendo.

n7 += 10;  // n7 = n7 + 10;
console.log(n7);  // 737

n7 -= 700;
console.log(n7);  // 37

n7 *= 100;
console.log(n7);  // 3700

n7 /= 10;
console.log(n7);  // 370

n7 %= 37;
console.log(n7);  // 0

// Con strings es válido el sumando.
var s4 = 'string 1';
var s5 = 'string 2';

s4 += ' ' + s5;  // s4 = s4 + ' ' + s5;
console.log(s4);  // 'string 1 string 2'

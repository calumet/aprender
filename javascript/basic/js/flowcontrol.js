// Control de flujo en JavaScript.

//
// if .. else ...
//

var apagado = true;
var gasolina = 10;  // litros

if (true) console.log('estamos dentro de un vehículo');

if (apagado) {
  console.log('encender');
  apagado = false;
}

if (!apagado && gasolina > 0) {
  console.log('acelerar');
  gasolina--;
} else {
  console.log('tanquear');
  gasolina++;
}


//
// ? : (operador ternario)
//

var velocidad = 90;  // km/h
var luces = true;

var excesoDeVelocidad = velocidad > 80 ? 'si' : 'no';  // 'si'
console.log(luces ? 'mantener encendidas' : 'encender luces');  // 'mantener encendidas'


//
// if ... else if ... else
//

var lluvia = 6.72;  // mm / 5 minutos
var humedad = 82;  // porcentaje relativo

if (lluvia < 0.254) {
  if (humedad <= 70) {
      console.log('normal');
  } else {
      console.log('nublado');
  }
}
else if (lluvia >= 0.254 && lluvia < 2) {
  console.log('lluvia ligera');
}
else if (lluvia >= 2 && lluvia < 8) {
  console.log('lluvia moderada');
} else {
  console.log('lluvia fuerte');
}


//
// switch
//

var status = 500;

switch (status) {
  case 200:
    console.log('ok');
    break;
  case 301: {
    console.log('movido permanentemente');
    break;
  }
  case 404: {
    console.log('no encontrado');
    break;
  }
  case 500: {
    console.log('error del servidor');  // Estado escogido.
    break;
  }
  default: {
    console.log('desconocido');
  }
}


//
// while
//

var velocidad = 0;  // m/s
var acelerador = 5;  // m/s^2
var gasolina = 30;  // litros

// Acelerará 12 veces.
while (gasolina > 0 && velocidad < 60) {
  console.log('acelerando');
  velocidad += acelerador;
  gasolina--;
  // break;
  // continue;
}


//
// for
//

var nombres = [
  'Juan',
  'María',
  'Pepe',
  'Sandra'
];

for (var i = 0; i < nombres.length; i++) {
  console.log('Hola ' + nombres[i] + '!');
  // break;
  // continue;
}


//
// for in
//

var personas = {
  Juan: {
    ocupacion: 'Arquitecto',
    edad: 25
  },
  Maria: {
    ocupacion: 'Programadora',
    edad: 24
  },
  Pepe: {
    ocupacion: 'Topógrafo',
    edad: 30
  },
  Sandra: {
    ocupacion: 'Diseñadora',
    edad: 27
  }
};

for (var p in personas) {
  console.log(p + ' trabaja de ' + personas[p].ocupacion + ' a la edad de '
    + personas[p].edad + '.');
  // break;
  // continue;
}


//
// Valores Truthy y Falsy
//

/*
  Todo tipo de dato se puede evaluar para convertirlo en booleano. Es decir,
  cualquier tipo de dato primitivo como todo objeto puede evaluarse como booleano
  en una expresión.

  Por ejemplo, en un condicional if se puede evaluar un objeto, el cual se evaluará
  como un valor verdadero.
 */

/*
  Valores Truthy (valores que se evaluarán como true):
  - true
  - números diferentes de cero
  - strings con contenido
  - objetos
  - arrays
  - funciones
 */

if (true)           console.log('es true');  // 'es true'
if (7512)           console.log('es true');  // 'es true'
if ('un string')    console.log('es true');  // 'es true'
if ({})             console.log('es true');  // 'es true'
if ([])             console.log('es true');  // 'es true'
if (function () {}) console.log('es true');  // 'es true'

/*
  Valores Falsy (valores que se evaluarán como false):
  - false
  - 0
  - '' (string vacío)
  - undefined
  - null
  - NaN
 */

if (false)     console.log('es true'); else console.log('es false');  // 'es false'
if (0)         console.log('es true'); else console.log('es false');  // 'es false'
if ('')        console.log('es true'); else console.log('es false');  // 'es false'
if (undefined) console.log('es true'); else console.log('es false');  // 'es false'
if (null)      console.log('es true'); else console.log('es false');  // 'es false'
if (NaN)       console.log('es true'); else console.log('es false');  // 'es false'

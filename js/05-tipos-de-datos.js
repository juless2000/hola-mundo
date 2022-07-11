'use strict'

// OPERADORES
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 * numero2;

alert("El resultado es: " + operacion);

// TIPOS DE DATOS

var numero_entero = 69;
var cadena_texto = "hola";
var verdadero_falso = false;

var numero_falso = "33";

Number(numero_falso); //SIMILAR A ParseInt, ParseFloat para decimal 
String(numero_entero); // Convierte a String un entero;
console.log(Number(numero_entero + 4));

// typeof -> devuelve el tipo de datos de las variables
console.log(typeof numero_entero); 
console.log(typeof cadena_texto); 
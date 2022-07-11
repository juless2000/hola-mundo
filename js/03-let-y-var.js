'use strict'

// Pruebas con Let y var

// PRUEBA CON VAR -> SETEA A NIVEL GLOBAL
var numero = 40;
console.log(numero); // valor 40 

if(true){
	var numero = 50;
	console.log(numero); // valor 50
}

console.log(numero); //valor 50

// PRUEBA CON LET -> SETEA A NIVEL DE BLOQUE
var texto = "Curso JS";
console.log(texto); // valor JS

if (true) {
	let texto = "Curso Laravel 5";
	console.log(texto); //valor laravel 5
}

console.log(texto); // valor JS 
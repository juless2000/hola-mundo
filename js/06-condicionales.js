'use strict'

// CONDICIONAL IF

// COMPARAR ALGO -> SI A es igual a B, entonces haz algo

// Si pasa esto, ejecuta esto
var edad1 = 30;
var edad2 = 12;

if(edad1 > edad2){
	// Ejecuta esto
	console.log("Edad uno es mayor que edad dos");
}
else{
	console.log("La edad uno es inferior");
}

///////////////////////////////////////////////

/*

// Operadores relacionales
	
	Mayor = >
	Menor = <
	Mayor o igual = >=
	Menor o igual = <= 
	Igual = ==
	Distinto = !=
*/

var edad = 70;
var nombre = "Jules Casablancas"

if (edad >= 18) {
	// Es mayor de edad
	console.log(nombre +" tiene "+edad+" años, es mayor de edad");

	if (edad <= 33) {
		console.log("Todavia eres millenial");
	}else if (edad >= 70){
		console.log("Eres anciano");
	}else{
		console.log("Ya no eres millenial");
	}


} else {
	// Es menor de edad
	console.log(nombre +" tiene "+edad+" años, es menor de edad");
}

/*
// OPERADORES LOGICOS

	AND(Y) : &&
	OR(O) : ||
	NEGACION : !

*/

var year = 2022;

// NEGACION

if (year != 2018) {
	console.log("El año no es 2018, realmente es: " + year);
}

// AND

if (year >= 2000 && year <= 2025 && year != 2018) {
	console.log("Estamos en la era actual");
}else{
	console.log("Estamos en la era post moderna");
}


// OR

if (year == 2002 || (year >= 2012 && year == 2022 )) {
	console.log("El año acaba en dos");
}else{
	console.log("año no registrado");
}




































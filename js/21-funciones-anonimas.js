'use strict'

// FUNCIONES ANONIMAS
// Es una funcion que no tiene nombre

var pelicula = function(nombre){
	return "La pelicula es: " + nombre;
}

//CALLBACK
// Funcion que se ejecuta dentro de otra

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1 + numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar); 

	return sumar;
}


// Al llamarlo, las funciones anonimas 
// se añaden como parametros

sumame(5, 7, function(dato){
	console.log("La suma es: ", dato);
},
function(dato){
	console.log("La suma por dos es: ", (dato*2));
});


// FUNCIONES FLECHA

// En lugar de colocar function en las funciones callback,
// se pone una flecha, realiza la misma accion 

sumame(5, 7, dato => {
	console.log("La suma es: ", dato);
}, 
dato => {
	console.log("La suma por dos es: ", (dato*2));
});

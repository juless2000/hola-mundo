'use strict'

/*
	Mostrar todos los numeros divisores de un 
	numero introducido en un prompt

	Un numero es divisor cuando el resto de
	la division es cero.
*/

var numero = parseInt(prompt("Ingresa un numero", 1));

for(var i = 1; i <= numero; i++){

	if(numero%i == 0){
		console.log("Divisor: " + i);
	}
	
}
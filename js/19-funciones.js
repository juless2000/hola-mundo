'use strict'

// FUNCIONES

/*
 Agrupacion reutilizable de un conjunto 
 de instrucciones.
*/

// Defino la funcion
/*function calculadora(){

	// Conjunto de instrucciones a ejecutar
	console.log("Hola soy la calculadora");
	console.log("Si soy yo");
	
	return "Hola soy la calculadora";
}

// Invocar o llamar a la funcion
calculadora();

*/
/* PARAMETROS */

/*
// Defino la funcion
function calculadora(numero1, numero2){

	// Conjunto de instrucciones a ejecutar
	console.log("Suma: " + (numero1+numero2));
	console.log("Resta: " + (numero1-numero2));
	console.log("Multiplicacion: " + (numero1*numero2));
	console.log("Division: " + (numero1/numero2));
	console.log("-----------------------------------");
	//return "Hola soy la calculadora";
}

// Invocar o llamar a la funcion
calculadora(12,8);
*/
/*
for(var i = 1; i <= 10; i++){ // muestra 10 veces el resultado
	calculadora(i, 8);  
}
*/

/* PARAMETROS OPCIONALES
	parametro que ya viene inicializado y no es necesario
	pasarlo en la funcion para llamarlo
*/


/*

// Defino la funcion
function calculadora(numero1, numero2, mostrar = false){

	// Conjunto de instrucciones a ejecutar

	if (mostrar == false) {
		console.log("Suma: " + (numero1+numero2));
		console.log("Resta: " + (numero1-numero2));
		console.log("Multiplicacion: " + (numero1*numero2));
		console.log("Division: " + (numero1/numero2));
		console.log("----------------------------");
	}else{
		document.write("Suma: " + (numero1+numero2)+"<br>");
		document.write("Resta: " + (numero1-numero2)+"<br>");
		document.write("Multiplicacion: " + (numero1*numero2)+"<br>");
		document.write("Division: " + (numero1/numero2)+"<br>");
		document.write("----------------------------"+"<br>");
	}

	
	//return "Hola soy la calculadora";
}

// Invocar o llamar a la funcion
calculadora(12,8);

calculadora(12,6, true); // muestra en la pagina por html
						// parametro inicializado, no es opcional pasarlo por la funcion

*/

/* FUNCIONES DENTRO DE OTRAS */

function porConsola(numero1, numero2){
	console.log("Suma: " + (numero1+numero2));
	console.log("Resta: " + (numero1-numero2));
	console.log("Multiplicacion: " + (numero1*numero2));
	console.log("Division: " + (numero1/numero2));
	console.log("----------------------------");
}

function porPantalla(numero1, numero2){
	document.write("Suma: " + (numero1+numero2)+"<br>");
	document.write("Resta: " + (numero1-numero2)+"<br>");
	document.write("Multiplicacion: " + (numero1*numero2)+"<br>");
	document.write("Division: " + (numero1/numero2)+"<br>");
	document.write("----------------------------"+"<br>");
} 


function calculadora(numero1, numero2, mostrar = false){

	// Conjunto de instrucciones a ejecutar

	if (mostrar == false) {
		porConsola(numero1, numero2);
	}else{
		porPantalla(numero1, numero2);
	}

	
	return true;
}

// Invocar o llamar a la funcion
calculadora(12,8);

calculadora(12,6, true); // muestra en la pagina por html
						// parametro inicializado, no es opcional pasarlo por la funcion


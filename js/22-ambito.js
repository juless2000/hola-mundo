'use strict'

function holaMundo(texto){
	var hola_mundo = "Texto dentro de funcion";
	console.log(texto);
	console.log(numero.toString()); //.toString(), convierte numero en String
	console.log(hola_mundo); // Se accede solamente porque esta dentro
							// de la funcion	
}

//Se pueden acceder a estas variables porque 
//son globales

var numero= 12;
var texto = "Hola mundo soy una variable global";


holaMundo(texto);


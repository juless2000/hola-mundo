'use strict'

/*
	que nos diga si un numero es par o impar
	Ventana prompt
	Si no es valido, que nos pida de nuevo
	el numero. 
*/

var numero = parseInt(prompt("Introduce un numero", 0));

while(isNaN(numero)){ //Mientras que NO sea un numero, de vueltas el bucle
	numero = parseInt(prompt("Introduce un numero", 0));

}

if(numero % 2 == 0){ // formula para num par
	alert("Es numero par");
}else{
	alert("Es numero impar");
}

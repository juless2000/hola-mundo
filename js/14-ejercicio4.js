'use strict'

/*
Mostrar todos los numeros impares que hay
entre dos numeros 
introducidos por el usuario

*/

var num1 = parseInt(prompt("Introduce el primer numero", 0));
var num2 = parseInt(prompt("Introduce el segundo numero", 0));

while(num1 < num2){ //primero menor, luego mayor  
	num1++; //muestre los numeros entre ambos, al incrementar

	if (num1%2 != 0) { //muestra los numeros impares
		console.log("El numero" + num1 + " es impar");
	}
}
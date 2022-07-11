'use strict'

/*
Calculadora
- Pida dos numeros por pantalla
- Si metemos uno mal, que nos los vuelva 
a pedir
- En el cuerpo de la pagina, en una alerta
y por la consola, el resultado de sumar,
restar, multiplicar y dividir las cifras
*/

var num1 = parseInt(prompt("Introduce el primer numero", 0));
var num2 = parseInt(prompt("Introduce el segundo numero", 0));

while(num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)){
	num1 = parseInt(prompt("Introduce el primer numero", 0));
	num2 = parseInt(prompt("Introduce el segundo numero", 0));
}

var resultado = "La suma es: " + (num1 + num2) + "<br>" +
				"La resta es: " + (num1 - num2) + "<br>" +
				"La multiplicacion es: " + (num1 * num2) + "<br>" +
				"La división es: " + (num1 / num2) + "<br>";

var resultadoCMD = "La suma es: " + (num1 + num2) + " \n" +
				"La resta es: " + (num1 - num2) + " \n" +
				"La multiplicacion es: " + (num1 * num2) + " \n" +
				"La división es: " + (num1 / num2) + " \n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);


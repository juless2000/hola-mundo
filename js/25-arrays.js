'use strict'

// Arrays, Arreglos, Matrices
var nombre = "Jules";

// Con array puedes tener muchos valores dentro de una misma variable
// de cualquier tipoo de datos
var nombres = ["Pedro", "Jules", "Vegeta", "Hayley", 52, true];

// Tambien se define como objeto, con parentesis
var lenguajes = new Array("PHP", "JS", "HTML", "Java", "CSS", "C#");

/*

// Cada array tiene un indice, empieza desde Cero.
// [2] => Saca el elemento poniendo su posicion en corchetes
console.log(nombres[2]); //Vegeta

// Arrays avanzados

// Length => muestra la cantidad de elmentos del array
console.log(nombres.length);

// elemento => contiene el numero del array
var elemento = parseInt(prompt("Que elemento del array quieres?", 0));

if(elemento >= nombres.length){
	alert("Ingrese un numero correcto menor que: " + nombres.length);
}
	alert("El usuario seleccionado es: " + nombres[elemento]);

// alert(nombres[elemento]);

*/

// Recorrer un array y mostrar su resultado

document.write("<h1>Lenguajes de programación del 2022</h1>");
document.write("<ul>");

/* METODO 1 CON FOR

for(var i = 0; i < lenguajes.length; i++){ 
//Mientras que el contador sea menor que la cantidad de elementos, que recorra el array
	document.write("<li>" + lenguajes[i] + "</li>");
}

*/


//METODO 2 CON FOR EACH

// Nos itera/recorre todo el array y nos lo muestra

/*

lenguajes.forEach((elemento, index) => {

	document.write("<li>" + index + " - " + elemento + "</li>");
});

*/

// METODO 3 CON FOR IN

// Recorre el indice del array lenguajes  

for(let lenguaje in lenguajes){
	// Muestra en pantalla el recorrido del indice en el array
	// Captura el nombre utilizando el array con corchetes y
	// dentro el indice = lenguaje
	document.write("<li>" +lenguajes[lenguaje] + "</li>");
}


document.write("</ul>");


// BUSQUEDAS EN UN ARRAY

// Find -> junto a una funcion de callbak, permite buscar el elemento
// retornando true o false


// Metodo 1
/*

var busqueda = lenguajes.find(function(lenguaje){
	return lenguaje == "PHP";
});

*/

// Metodo 2

 // var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

// findIndex => Permite buscar el indice del indice
// var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");



// Encontrar si hay valores de un tipo u otro dentro de un array

var precios = [10, 20 , 50 , 80 , 16];

// SOME-> Nos permite comprobar si hay elementos segun lo indicado

// Si existen elementos mayores a 20
var busqueda = precios.some(precio => precio >= 20); // True  















console.log(busqueda);



















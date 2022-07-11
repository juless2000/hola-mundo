'use strict'

// TRANSFORMACION DE TEXTOS

var numero = 444;
var texto1 = "      Bienvenido al curso del curso de JS";
var texto2 = "Es muy buen curso";

/*

var dato = numero.toString(); ////Convertimos numero a string, el punto se accede a las propiedades de las variables
	dato = texto1.toUpperCase(); //Todo mayusculas
	//dato = texto2.toLowerCase(); //Todo minusculas 

console.log(dato);

// CALCULAR LONGITUD DE TEXTOS

var nombre = "Jules";
var nombre = ["Hola", "ola"];
console.log(nombre.length); 
// Length :
// Contar la cantidad de letras que tengo en una cadena
// Contar la cantidad de elementos de arrays.


// CONCATENAR
// Unir textos

//var textoTotal = texto1 + " " + texto2;

var textoTotal = texto1.concat(" " + texto2); // Concatenar


console.log(textoTotal);

*/

// Metodos de Busqueda

// var busqueda = texto1.indexOf("curso"); 
// Encuentra la primera coincidencia de la palabra en el texto

// var busqueda = texto1.lastIndexOf("curso"); 
// Encuentra la ultima aparicion de una palabra

// var busqueda = texto1.search("curso"); 
// igual que indexOf

//var busqueda = texto1.match("curso");
// Devuelve un array/coleccion con las palabras
//var busqueda = texto1.match(/curso/g);
// Encuentra de manera global la palabra

// var busqueda = texto1.substr(14, 5);
// Saca las letras que le siguen a partir del 
// caracter indicado 

// var busqueda = texto1.charAt(14);
// Saca la letra que le indiques como parametro 


// var busqueda = texto1.startsWith("Bienvenido al curso");
// Busca al inicio del String, te da false al buscar al final

// var busqueda = texto1.endsWith("JS");
// Busca al final del String, da true al final del string 


// var busqueda = texto1.includes("JS");
// Encuentra palabras en el String



// FUNCIONES DE REEMPLAZO

//var busqueda = texto1.replace("JS", "Python");
// Reemplaza un texto por otro, indicado en el segundo paramtro

// var busqueda = texto1.slice(14, 22);
// Recorta el string a partir del caracter desginado en el paramtro

// var busqueda = texto1.split(" ");
// Mete todo el string dentro de un Array
// Separa con espacios el array si pones un separador en el parametro

// var busqueda = texto1.trim();
// recorta los espacios por delante y detras del string














console.log(busqueda);

// Si sale -1, es porque no encontró coincidencias
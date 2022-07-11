'use strict'


/*
	Programa que pida 6 numeros por pantalla y los meta
	en un array.

	Mostrar el array entero (todos sus elementos) en el
	cuerpo de la pagina y en la consola

	Ordenarlo y mostrarlo

	Invertir su orden y mostrarlo

	Mostrar cuantos elementos tiene el array

	Busqueda de un valor introducido por el usuario
	y que nos dga si lo encuentra y su indice.

*/

// 2 MOSTRAR POR PAGINA

// FUNCION GENERAL PARA MOSTRAR NUMEROS EN LA PAGINA

function mostrarArray(elementos, textoCustom = ""){
	document.write("<h1>Contenido del array "+textoCustom+"</h1>");
	document.write("<ul>");
	elementos.forEach((elemento, indice) => {
		document.write("<li>"+ elemento +"</li>");
	});
	document.write("</ul>");
}



// 1

// Metodo uno
/*
var numeros = new Array(6); // Indica cuantas posiciones va a tener

for(var i = 0; i <= 5; i++){ // Mientras q el contador sea menor igual a 5, del 0 al 5 son 6 numeros 

	// En la posicion que estemos iterando, nos pedira un prompt
	// Mientras itera, se añade un valor 
	numeros[i] = parseInt(prompt("Introduce un numero", 0));
}

console.log(numeros);

*/

// Metodo dos


// Pedir numeros
var numeros = []; // Declaramos un array vacio

for(var i = 0; i <= 5; i++){ // Mientras q el contador sea menor igual a 5, del 0 al 5 son 6 numeros 

	// Push- >  cuando itere, se añade un valor
	numeros.push(parseInt(prompt("Introduce un numero", 0)))
	;
}


/*
// 2 Mostrar por la pagina 

document.write("<h1>Contenido del array</h1>");

numeros.forEach((numero, indice) => {
	document.write("<strong>"+ numero +"</strong></br>")
});

*/


// SE LLAMA A LA FUNCION Y PASAMOS EL ARRAY JUNTO A UN TEXTO QUE QUERRAMOS
mostrarArray(numeros);


// 3 Ordenarlo y mostrarlo

//ORDENADO DE MANERA ALFABETICA

numeros.sort();

//ORDENADO DE MANERA ALFABETICA

mostrarArray(numeros,"ORDENADO ALFABETICAMENTE"); 


//ORDENADO DE MANERA NUMERICA

numeros.sort(function(a, b) {
	return a-b
});  // Orden ascendente

// Si quieres descendente, cambiar la b por la a

mostrarArray(numeros,"ORDENADO NUMERICAMENTE");

// Mostrar el array por la consola
console.log(numeros);



// 4 INVERTIR SU ORDEN Y MOSTRARLO

numeros.reverse();

mostrarArray(numeros,"REVERTIDOS");

// 5 CUANTOS ELEMENTOS TIENE EL ARRAY

document.write("El array tiene: " + numeros.length + " elementos");

// 6 BUSCAR VALOR DE USUARIO

// Prompt para buscar el numero del usuario

var busqueda = parseInt(prompt("Busca un numero", 0));  

// Si el elemento del array coincide con la busqueda del usuario
// Saca la posicion/index 

var posicion = numeros.findIndex(numero => numero == busqueda); 

if(posicion && posicion != -1){ //Si buscado da true y es diferente a -1
	document.write("<hr/><h1>ENCONTRADO</h1>");
	document.write("<h1>Posición de la busqueda: " + posicion+ "</h1><hr/>");
}else {
	document.write("<h1>NO ENCONTRADO</h1>");
}


'use strict'

// Arrays Multidimensionales
// Array dentro de otros arrays

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["Batman", "SPIDERMAN", "Dr. Strange"];

// Ordenar el array
// SORT -> Ordena alfabeticamente
// peliculas.sort();


// REVERSE -> Poner en orden inverso al array
peliculas.reverse();

console.log(peliculas);



// Array multidimensional, contiene dos arrays
var cine = [categorias, peliculas];

/*

//Accedo a 'terror' a traves de los indices del array multidimensional 
console.log(cine[0][1]); 
				// categoria - terror
console.log(cine[1][2]); 
				// peliculas - Dr. strange	

*/

// OPERACIONES CON ARRAYS


/*

var elemento = "";

do{
	elemento = prompt("Agrega tu pelicula: ");
	// PUSH -> añadir elementos al array
	peliculas.push(elemento);
}

while(elemento != "ACABAR"); 
// Mientras que la palabra no sea ACABAR, q siga pidiendoo el prompt 
// Si la palabra es ACABAR, termina	

// Eliminar el ULTIMO elemento de un array
peliculas.pop();

// Reemplazar/eliminar propiedad de un array
peliculas[0] = undefined; // Primer elemento = [0]


// PUSH -> añadir elementos al array
// peliculas.push("Wason");

*/

/*

// ELIMINAR UN ELEMENTO ESPECIFICO DEL ARRAY

// Captura el indice del elemnto con indexOf 
var indice = peliculas.indexOf('SPIDERMAN');
console.log(indice); // Sale 1 = SPIDERMAN

// -1 -> significa no encontrado
if(indice > -1){ //SI ENCUENTRA EL ELEMENTO EN EL ARRAY
	// SPLICE -> En base a un indice, borrar tantos pasos como quiera 
	peliculas.splice(indice, 1); // Se borra el elemento
}

// CONVERTIR EL ARRAY EN UN STRING SEPARADO POR COMAS
var peliculas_string = peliculas.join();

console.log(peliculas_string);

// CONVERTIR STRING EN UN ARRAY

var cadena = "texto1, texto2, texto3";
// SPLIT -> Convierte el texto en un array, todo lo q este 
// separado por "," y "espacio" 
var cadena_array = cadena.split(", ");

console.log(cadena_array);


*/


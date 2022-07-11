'use strict'


// JSON -> JavaScript Object Notation || Notacion de objetos de JS
// Permite realizar una especie de Arrays asociativos 
// En llaves, separados por comas y asignando valores a las propiedades
var pelicula = {
	titulo: 'Spiderman No way home',
	year: 2021,
	pais: 'Estados Unidos'
};

var peliculas = [
	{titulo: "Superman", year: 2015, pais: "España"},
	pelicula // Objeto JSON
]

// Acceder a la propiedad -> pelicula.titulo | pelicula.year .....

// Cambia el valor de la propiedad
pelicula.titulo = "Spiderman 4";

console.log(peliculas);

// Seleccionamos el id del div peliculas
var caja_peliculas = document.querySelector('#peliculas');
var index;
for(index in peliculas){ // Recorre el indice del array peliculas
	// Agregar variable parrafo cada que encuentre un elemento
	var p = document.createElement("p");
	// Se agrega el titulo y año de las peliculas
	p.append(peliculas[index].titulo + " - " + peliculas[index].year);
	// Se agrega el resultado al div de peliculas 
	caja_peliculas.append(p);
}

// MONGODB -> almacena como json los datos, son documentos 






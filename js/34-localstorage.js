'use strict'

// LOCALSTORAGE
// Podemos guardar información en nuestro navegador web
// a modo de sesión y q la información persista y este
// disponible durante la navegacion de las diferentes
// paginas de nuestra aplicacion web. 

// Es una memoria que tenemos en nuestro navegador web
// donde se guardan datos

// Comprobar disponibilidad del localstorage

// Si el localstorage es diferente a indefinido,
// es decir, si lo encuentra.
if (typeof(Storage) !== 'undefined' ) { 
	console.log("LocalStorage disponible");
}else {
	console.log("LocalStorage no está disponible");
}

// Como guardar/añadir un dato en el localstorage
localStorage.setItem("titulo", "Curso de python");

// Recuperar elemento
// console.log(localStorage.getItem("titulo"));

// Meterlo en el cuerpo de la pagina web
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");



// Guardar objetos

// Onjeto JSON definido
var usuario = {
	nombre: "Jules",
	email: "jules@gmail.com",
	web: "julescursos.com.pe"
};

// Añadir datos al localstorage del JSON
// Debemos convertir el JSON a string con -> stringify
// PORQUE NO PERMITE guardarlo como Json normal
localStorage.setItem("usuario", JSON.stringify(usuario));


// Recuperar objeto
console.log(localStorage.getItem("usuario")); // -> No usable porque es un Json string
// Convierte el JSON string en onjeto de JS usable
var userJS = JSON.parse(localStorage.getItem("usuario"));
console.log(userJS);
// Añadir elemento a la pagina en el div datos 
document.querySelector("#datos").append(" " + userJS.email + " " + userJS.nombre);


// Borrar elementos del localstorage

localStorage.removeItem("usuario");

// Clear -> Vaciar todo el local storage

localStorage.clear();





















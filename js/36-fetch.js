'use strict'
/*
 JSONPlaceholder/REQ res in -> Api Rest con datos de pruebas
 Api Rest -> Servicio o Backend q nos devuelve datos en JSON
 Puede recibir peticiones put, post, get, delete, que son 
 métods HTTP. 
 Servicio q va a recibir un JSON/informacion y nos va a
 devolver otra información en JSON.
 Mediante el api rest / backend, se van a estar guardando
 datos en la BD | Se van a estar sacando datos de la BD 
 */

/* 

// FETCH -> REALIZA PETICIONES AJAX
// FETCH Y PETICIONES A SERVICIOS / APIS REST

// Listado de usuarios

// Capturamos el div de usuarios
var div_usuarios = document.querySelector("#usuarios");

// Promesa -> .then: recoje datos
var usuarios = [];

// Se accede a unos datos/servicio remotos 
fetch('https://reqres.in/api/users')
	// Capturamos el data y lo convertimos a JSON
	.then(data => data.json())
	// Ya tenemos la info en data y se guarda dentro de
	// la variable usuarios(Array) 	
	// users -> sacamos unicamente los usuarios
	.then(users => {
		usuarios = users.data;
		console.log(usuarios);

		// Map -> similar a un for each
		// Pasamos el user y el indice como parametro
		usuarios.map((user, i) => {
			// Cada iteracion que encuentre, pone un h2
			let nombre = document.createElement('h3');
			// Concatena los nombres y apellidos
			nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
			// Muestra el resultaod en el div de usuarios
			div_usuarios.appendChild(nombre);
			// Capturamos la clase y la desaparecemos al termionar de cargar 
			document.querySelector(".loading").style.display = "none";

		});
	});
*/


// PROMESAS Y FETCH


// Capturamos el div de usuarios
var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_janet = document.querySelector("#janet");

/*

// LLama al metodo y se utiliza sin problema
	getUsuarios()
	.then(data => data.json())
	.then(users => {
		listadoUsuarios(users.data);
		// Una vez tenga el listado, muestre lo siguiente
		return getJanet();
	})
	.then(data => data.json())
	.then(user => {
		mostrarJanet(user.data);

		// Otra promesa disponible para hacer un then
		return getInfo();
	})
	.then(data => {
		console.log(data);
	});

*/	


// LLama al metodo y se utiliza sin problema
	// Promesa 1
	getUsuarios()
	//Capturamos los datos de promesa 1
	.then(data => data.json())
	.then(users => {
		listadoUsuarios(users.data);

		// Promesa 2
		// Otra promesa disponible para hacer un then
		return getInfo();


	})
	//Capturamos los datos de promesa 2
	.then(data => {
		// Dsps de los 3 seg, mostrar en pantalla el JSON string
		div_profesor.innerHTML = data;

		// Una vez tenga el getInfo, muestre lo siguiente
		// getJanet -> Es un fetch q tmn se le llama promesa 3
		return getJanet();
	})
	// Capturamos los datos de promesa 3
	.then(data => data.json())
	.then(user => {
		mostrarJanet(user.data);

	})
	// Como capturar el error de una promesa
	.catch(error => {
		alert("Error en las peticiones");
		console.log(error);
	});


// Devuelve el fetch
function getUsuarios() {
	return fetch('https://reqres.in/api/users');
}

function getJanet() {
	return fetch('https://reqres.in/api/users/2');
}

function getInfo() {
	//JSON
	var profesor = {
		nombre: "Jules",
		apellidos: "Hosde",
		url: "https://jules.com"
	};
	// Crear promesa desde cero
	// La promesa se ha resuelto o no

	// Se puede realizar primero la lógica y luego encadenarlo
	// a la promesa

/*
	return new Promise((resolve, reject) =>{
		// Convertir JSON en string
		// Utilizamos el JSON
		var profesor_string = JSON.stringify(profesor);
		// Si el JSON string es diferente a un string
		// Que retorne el reject, la cual deniega la promesa
		if(typeof profesor_string != 'string') return reject("Error");
		// SI es todo correcto, q retorne el JSON string

		return resolve(profesor_string);
	});

*/

	return new Promise((resolve, reject) =>{
		var profesor_string = "";
		setTimeout(function () {
			// Convertir JSON en string
			// Utilizamos el JSON
			profesor_string = JSON.stringify(profesor);

			// Si el JSON string es diferente a un string o es igual a NADA
			// Que retorne el reject, la cual deniega la promesa
			if(typeof profesor_string != 'string' || profesor_string == "") return reject("Error");
			// SI es todo correcto, q retorne el JSON string

			return resolve(profesor_string);
		}, 3000);
		

		
	});

}

function listadoUsuarios(usuarios){
	usuarios.map((user, i) => {
			// Cada iteracion que encuentre, pone un h2
			let nombre = document.createElement('h3');
			// Concatena los nombres y apellidos
			nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
			// Muestra el resultaod en el div de usuarios
			div_usuarios.appendChild(nombre);
			// Capturamos la clase y la desaparecemos al termionar de cargar 
			document.querySelector(".loading").style.display = "none";

	});
}	

function mostrarJanet(user){
	// Se crea el elemento h4
	let nombre = document.createElement('h4');
	// Creamos el elemento img
	let avatar = document.createElement('img');

	// Concatena los nombres y apellidos de Janet
	nombre.innerHTML = user.first_name + " " + user.last_name;
	// Buscamos su ubicación
	avatar.src = user.avatar;
	// Modificamos su tamaño
	avatar.width = "200";

	// Muestra el resultado en el d janet
	div_janet.appendChild(nombre);
	// Muestra la imagen en el div
	div_janet.appendChild(avatar);

	// Capturamos la clase y la desaparecemos al termionar de cargar 
	document.querySelector("#janet .loading").style.display = "none";

}	

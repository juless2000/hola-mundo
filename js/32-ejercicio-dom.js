'use strict'

window.addEventListener('load', function(){
	console.log("DOM CARGADO");

	/*Se captura el id del formulario*/
	var formulario = document.querySelector('#formulario');
	/*Capturar para ocultar el div antes de enviar*/
	var box_dashed = document.querySelector('.dashed');
	/*Ocultar DIV*/
	box_dashed.style.display = "none";
	/*Capturamos el evento submit el boton de enviar*/
	formulario.addEventListener('submit', function(){
		console.log("Evento submit capturado");

		/*Mostrar y obtener los datos*/
		var nombre = document.querySelector('#nombre').value;
		var apellidos = document.querySelector('#apellidos').value;
		var edad = parseInt(document.querySelector('#edad').value);

		/*Capturar el span para la validación*/
		var nom_error = document.querySelector('#error_nombre');
		var ape_error = document.querySelector('#error_apellidos');
		var eda_error = document.querySelector('#error_edad');

		/*Validación de datos*/

		// trim -> elimina los espacios de inicio a final
		if (nombre.trim() == null || nombre.trim().length == 0) {
			alert("El nombre no es válido");
			nom_error.innerHTML = "El nombre no es válido"; 
			nom_error.style.color = "red";
			return false;
		}else{
			nom_error.style.display = "none";
		}

		if (apellidos.trim() == null || apellidos.trim().length == 0) {
			alert("Los apellidos no son válidos");
			ape_error.innerHTML = "Los apellidos no son válidos"; 
			ape_error.style.color = "red";
			return false;
		}else{
			ape_error.style.display = "none";
		}

		if (edad == null || edad <= 0 || isNaN(edad)) {
			alert("La edad no es válida");
			eda_error.innerHTML = "La edad no es válida"; 
			eda_error.style.color = "red";
			return false;
		}else{
			eda_error.style.display = "none";
		}

		/*Mostrar el DIV al darle enviar*/
		box_dashed.style.display = "block";

		/*Muestra en el DIV el resultado*/

		/*
		// METODO 1
		var datos_usuario = [nombre,apellidos,edad];
		var indice;
		// For In -> recorre el array de usuario  
		for(indice in datos_usuario){
			// Cada que itere, crea el parrafo
			var parrafo = document.createElement('p');
			// Se agrega al parrafo los datos del usuario
			parrafo.append(datos_usuario[indice]);
			// Los datos se muestran en el dashed
			box_dashed.append(parrafo);
		}
		*/

		// METODO 2

		/*capturar el id de los parrafos*/
		var p_nombre = document.querySelector('#p_nombre span');
		var p_apellidos = document.querySelector('#p_apellidos span');
		var p_edad = document.querySelector('#p_edad span'); 

		/*Mostrar el texto*/
		p_nombre.innerHTML = nombre;
		p_apellidos.innerHTML = apellidos;
		p_edad.innerHTML = edad;	

	});





});
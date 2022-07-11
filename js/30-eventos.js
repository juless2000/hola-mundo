'use strict'

// EVENTOS

// Evnto LOAD -> Permite cargar los scripts del JS, 
// sin necesidad de poner el script al final del HTML
// El script se puede cargar en el Head sin problemas
window.addEventListener('load', function(){
	// Eventos del ratón

	// OnClick => captura el evento del click
	// OndblClick => captura el evento al dar click dos veces

	var boton = document.querySelector("#boton");

	function cambiarColor(){
		console.log("click")
		var bg = boton.style.background;
		if ( bg == "green") {
			boton.style.background = "red";
		}
		else{
			boton.style.background = "green";
		}

		boton.style.padding = "10px";
		boton.style.border = "1px solid #ccc";

		return true;
	} 

	// EVENTO CLICK

	// AddEventListener
	// Similar a jquery, puedes ejecutar un evento dentro
	// del codigo de JS, tener un escuchador de eventos

	// Callback -> funcion q es pasada como parametro
	// de otra funcion

	// Llamamos al callback cambiarColor para ejecutarlo
	// al dar click
	boton.addEventListener('click', function(){
		cambiarColor();
		// THIS -> hace referencia al objeto (boton), 
		// en el cual yo hago click
		// Se accede al boton donde se ha aplicado el evento
		console.log(this);
		this.style.border = "10px solid black";
	});


	// MOUSE OVER
	boton.addEventListener('mouseover', function(){
		boton.style.background = "#ccc";
	})

	// MOUSE OUT
	boton.addEventListener('mouseout', function(){
		boton.style.background = "yellow";
	})

	// EVENTOS DE TECLADO Y FOCO

	// FOCUS

	// Ingresa al input al darle click
	var input = document.querySelector("#campo_nombre");

	input.addEventListener('focus', function(){
		console.log("[focus] Estas dentro del input");
	})


	// BLUR

	// Fuera del input
	input.addEventListener('blur', function(){
		console.log("[blur] Estas fuera del input");
	})


	// KEYDOWN -> Pulsando tecla 
	// event -> se captura los datos del evento
	// String.fromCharCode -> Captura las teclas
	input.addEventListener('keydown', function(event){
		console.log("[keydown] Estas pulsando esta tecla", String.fromCharCode(event.keyCode));
	})


	// KEYPRESS -> Cuando la tecla ya esta presionada

	input.addEventListener('keypress', function(event){
		console.log("[keypress] Tecla presionada", String.fromCharCode(event.keyCode));
	})


	// KEYUP -> Se muestra la tecla soltada 

	input.addEventListener('keyup', function(event){
		console.log("[keyup] Tecla soltada", String.fromCharCode(event.keyCode));
	})

	
});



















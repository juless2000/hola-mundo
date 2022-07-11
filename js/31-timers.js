'use strict'


window.addEventListener('load', function(){

	// TIMERS

	function intervalo(){
		var tiempo = setInterval(function(){
			console.log("Set interval ejecutado");

			var encabezado = document.querySelector("h1");
			if (encabezado.style.fontSize == "50px") {
				encabezado.style.fontSize = "30px";
			}else {
				encabezado.style.fontSize = "50px";
			}

		}, 500); 

		return tiempo;
	}

	var tiempo = intervalo();
	// SET INTERVAL -> Se ejecuta varias veces en 
	// cada intervalo de segundos 

	


	// SET TIME OUT -> Se ejecuta una sola vez 
	// cada cierto tiempo
	/*

	var tiempo = setTimeOut(function(){
		console.log("Set interval ejecutado");

		var encabezado = document.querySelector("h1");
		if (encabezado.style.fontSize == "50px") {
			encabezado.style.fontSize = "30px";
		}else {
			encabezado.style.fontSize = "50px";
		}

	}, 5000); 

	*/

	// Parar el bucle del SetInterval
	var stop = document.querySelector("#stop");

	stop.addEventListener('click', function(){
		alert("Has parado el intervalo en bucle");
		// Se le pasa la variable tiempo del set interval
		// Tiempo invoca a la funcion intervalo
		clearInterval(tiempo);
	});

	// Parar el bucle del SetInterval
	var start = document.querySelector("#start");

	start.addEventListener('click', function(){
		alert("Has iniciado el intervalo en bucle");
		// Llamamos a la funcion intervalo
		intervalo();
	});


})
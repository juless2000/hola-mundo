'use strict'

// Seleccionamos nuestro formulario
var formulario = document.querySelector("#formpeliculas");

// Agarramos el evento submit
formulario.addEventListener('submit', function(){
	/* Seleccionamos el input con el valor que tenga */
	var titulo = document.querySelector('#addpelicula').value;
	// Si el titulo contiene caracteres, que añada al localstorage
	if (titulo.length >= 1) {
		localStorage.setItem(titulo, titulo);
	}
	else{
		alert("No se pueden agregar titulos vacíos");
	}
	
});


var ul = document.querySelector("#peliculaslist");

/* Recorre el localStorage */
for(var i in localStorage){
	// Si el localstorage es string, que muestre en la pagina
	if(typeof localStorage[i] == "string"){
		// Cada iteracion y encuentre, crea un li
		var li = document.createElement("li");
		// Se añade los valores al li
		li.append(localStorage[i]);
		// Se agrega al ul los datos del li
		ul.append(li);
	}
	
}



/////////////////////////////////////////////////////////////


// Seleccionamos nuestro formulario
var formulariob = document.querySelector("#formBorrarPeliculas");

// Agarramos el evento submit
formulariob.addEventListener('submit', function(){
	/* Seleccionamos el input con el valor que tenga */
	var titulo = document.querySelector('#borrarPelicula').value;
	// Si el titulo contiene caracteres, que borre del localstorage
	if (titulo.length >= 1) {
		// RemoveItem del elemento con ese titulo
		localStorage.removeItem(titulo);
	}

});







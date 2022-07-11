'use strict'

// DOCUMENT OBJECT MODEL

function cambiaColor(color){
	caja.style.background = color;
}

// selecciona los elementos por el ID
//var caja = document.getElementById("micaja");

// Otra forma de seleccionar un elemento
// Si es ID => # |||| Si es clase => .
var caja = document.querySelector("#micaja");

// innerHTML -> saca el contenido del id seleccionado
// var caja = document.getElementById("micaja").innerHTML;

// Modificar el html/texto en el JS
// caja.innerHTML = "Texto en la caja desde JS";

// Modificar con CSS .style
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

// Agregar clase
caja.className = "hola";


// Conseguir elemento por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');


// textContent -> igual q el innerHTML, pero no permite asignar un valor
// var contenidoEnTexto = todosLosDivs[2].textContent;
var contenidoEnTexto = todosLosDivs[2];
// Permite asignarle otro texto -> innerHTML
// Unicamente al elemento de indice 2
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
contenidoEnTexto.style.background = "red";


// For each no es recomendable para recorrer arrays de HTML

//todosLosDivs.forEach((valor, indice) => {


var seccion = document.querySelector("#miseccion");

var hr = document.createElement("hr");

var valor;


for(valor in todosLosDivs){
	if (typeof todosLosDivs[valor].textContent == 'string') {
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.append(texto); //Añade despues -_> append 
		seccion.append(parrafo);  
	}
	
}	


seccion.append(hr); //Añade separación 

// })

// console.log(contenidoEnTexto);

// Conseguir elemento por su clase
var divRojos = document.getElementsByClassName('rojo');
var divAmarillos = document.getElementsByClassName('amarillo');
divAmarillos[0].style.background = "yellow";


var div;
for(div in divRojos){
	if (divRojos[div].className == "rojo") {
		divRojos[div].style.background = "red";
	}
	
}

// QuerySelector

var id = document.querySelector("#encabezados");

var claseRojo = document.querySelector(".rojo");

console.log(claseRojo);















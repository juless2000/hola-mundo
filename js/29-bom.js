'use strict'

// BOM -> BROWSER OBJECT MODEL

// QUE TAMAÑO TIENE LA VENTANA DEL NAVEGADOR

function getBom(){
	// ANCHURA DE NAVEGADOR
	console.log(window.innerWidth);

	// ALTURA DE NAVEGADOR
	console.log(window.innerHeight);

	// ANCHURA PANTALLA COMPLETA
	console.log(screen.width);

	// ALTURA PANTALLA COMPLETA
	console.log(screen.height);

	// URL ACTUAL EN LA QUE ESTAMOS
	console.log(window.location);
}

// FUNCION PARA REDIRIGIR A OTRA URL
function redirect(url){
	window.location.href = url;
}

// ABRIR UNA NUEVA VENATANA DEL NAVEGADOR

function abrirVentana(url){
	window.open(url,"","width=1280,height=720");
}  


getBom();

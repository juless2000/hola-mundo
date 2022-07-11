'use strict'


// FECHAS

// Obtener la fecha
var fecha = new Date();


// Obtener eñ año
var year = fecha.getFullYear();
// Muestra el mes -> Enero = 0, Febrero = 1....
var mes = fecha.getMonth() + 1;
// Obtener el dia
var dia = fecha.getDate();
// Obtener la hora
var hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();

var textoHora = `
	El año es: ${year}
	El mes es: ${mes}
	El dia es: ${dia} 
	La hora es: ${hora}
`;

console.log(textoHora);


// Funciones matemáticas

// Numero random
// Se multiplica * 10 o más, dependiendo la cantidad de cifras
console.log(Math.random() * 10);


// Quitar decimales
console.log(Math.ceil(Math.random() * 10));

// Mas comunes -> Min, Max, Ceil, RANDOM
'use strict'

// Bucle WHILE

var year = 2022;

while(year <= 2050){
	//Ejecuta
	console.log("Estamos en el año: "+ year);

	if (year == 2040){
		break;
	}

	year++; //Aumenta para que se detenga el bucle
}

while(year != 1951){
	//Ejecuta
	console.log("Estamos en el año: "+ year);

	if (year == 2000) {
		break;
	}

	year--; //Decrementa para que se detenga el bucle
}

//DO WHILE

/*
Primero entra al DO, y luego verifica la instrucción del While
*/

var years = 30;

do{
	alert("Solo cuando sea diferente a 20");
	years--;
}while(years > 25)

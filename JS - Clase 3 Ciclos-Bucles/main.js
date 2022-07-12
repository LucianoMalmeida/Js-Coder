
let primeraPregunta = parseInt(prompt("Indica el año que viste tu primer Mundial de Futbol?"));
let segundaPregunta = parseInt(prompt("En qué año estamos?"));

let salida = segundaPregunta  - primeraPregunta;
alert("Han pasado" + " " +  salida + " " + "años de la primera vez que viste un Mundial de Futbol");

console.log(salida);

let cantidadJugadores = parseInt(prompt("cual es la cantidad de jugadores que hay en un equipo?"));
let sumaEdades = 0;

for(let i=1 ; i <= cantidadJugadores; i++){

    edadJugadores = parseInt(prompt("Ingresa la edad ideal de tus jugadores" + i ))
sumaEdades = sumaEdades + edadJugadores;
}

let promedio = sumaEdades/cantidadJugadores

alert ("El promedio de edad de tu equipo es de "+ " " + promedio )



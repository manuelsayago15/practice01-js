/*
Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y 
el programa muestre en una alerta la temperatura en Fahrenheit.
*/

let celsius = prompt('Ingrese la temperatura en Celsius: ');
let conversion = (celsius * 1.8) + parseInt(32);
alert('La temperatura en Fahrenheit es: ' + conversion);
/*
Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, 
finalmente el programa muestra una alerta con el resultado de la suma.
*/

let num1 = prompt('Ingrese un número: ');
let num2 = prompt('Ingrese un segundo número: ');
let total = parseInt(num1) + parseInt(num2);
console.log(num1);
console.log(num2);
alert('La suma total es: ' + total );


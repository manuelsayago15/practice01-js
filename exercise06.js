/* 
Crear un programa que determine si un número introducido en un popup es divisible por 5 o no, mostrar el resultado con console.log
*/
let num = prompt('Ingrese un número: ');
if(num%5 == 0) {
    console.log('Es divisible');
} else {
    console.log('No es divisible');
}

/*
Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log
*/
let number = prompt('Ingrese un número: ');
if(number%5 == 0 && number%11 == 0) {
    console.log('Es divisible');
} else {
    console.log('No es divisible');
}

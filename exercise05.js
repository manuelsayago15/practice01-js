/* 
Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.
*/

let num = prompt('Ingrese un número: ');
if(num%2==0){
    alert('El número ' +num+ ' es par');
} else {
    alert('El número ' +num+ ' es impar');
}
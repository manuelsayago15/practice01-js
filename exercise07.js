//Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.
let num1 = prompt('Ingrese un número: ');
let num2 = prompt('Ingrese otro número: ');
if(parseInt(num1) > parseInt(num2)) {
    alert('El número mayor es: ' + num1);
} else {
    alert('El número mayor es: ' + num2);
}

parseInt(num1)>parseInt(num2) ? alert('El número mayor es: ' + num1) : alert('El número mayor es: ' + num2);
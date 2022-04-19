/* Exercise-6a: Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y
guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */
function functionExercise(num1, num2) {
    return num1 + num2;
}
console.log("Result-6a", functionExercise(5, 8));

/* Exercise-6b: A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un
número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */
function functionExerciseB(num1, num2) {
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        alert("Error! One of these parameters is not a number!")
        return NaN; 
    }
    return num1 + num2;
}
console.log("Result-6b", functionExerciseB(5, "Ariana"));

/* Exercise-6c: Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un
número entero. */
function validateInteger(param1) {
    return Number.isInteger(param1);
}
console.log("Result-6c-1", validateInteger(0.2));
console.log("Result-6c-2", validateInteger(2));

/* Exercise-6d: A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En
caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */
function functionExerciseB(num1, num2) {
    if(typeof num1 != 'number' || typeof num2 != 'number') {
        alert("Error! One of these parameters is not a number!");
        return "NaN";
    } else if(!Number.isInteger(num1)) {
        alert(num1 + " must be an integer number, you can round it to " + Math.round(num1));
        return(Math.round(num1));
    } else if(!Number.isInteger(num2)) {
        alert(num2 + " must be an integer number, you can round it to " + Math.round(num2));
        return(Math.round(num2));
    }
    return num1 + num2;
}         
console.log("Result-6d", functionExerciseB(0.65, 1));

/* Exercise-6e: Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma
probando que todo siga funcionando igual. */
function functionApart(num1, num2) {
    if(!Number.isInteger(num1)) {
        alert(num1 + " is not an integer number, you can round it to " + Math.round(num1));
        return Math.round(num1, num2);
    }
}

function functionExerciseB(num1, num2) {
    if(typeof num1 != 'number' || typeof num2 != 'number') {
        alert("Error! One of these parameters is not a number!");
        return "NaN";
    } else {
        functionApart(num1);
        functionApart(num2);
    return num1 + num2;
    }
}
console.log(functionExerciseB(0.6, 2));
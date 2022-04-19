/* Exercise-3a: Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */
const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dicember"];
console.log("Result-3a", monthsArray[4], monthsArray[10]);

/* Exercise-3b: Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */
console.log("Result-3b", monthsArray.sort());

/* Exercise-3c: Agregar un elemento al principio y al final del array (utilizar unshift y push). */
monthsArray.push("Element2");
monthsArray.unshift("Element1");
console.log("Result-3c", monthsArray);

/* Exercise-3d: Quitar un elemento del principio y del final del array (utilizar shift y pop). */
monthsArray.shift(0);
monthsArray.pop(12);
console.log("Result-3d", monthsArray);

/* Exercise-3e: Invertir el orden del array (utilizar reverse). */
console.log("Result-3e", monthsArray.reverse());

/* Exercise-3f: Unir todos los elementos del array en un único string donde cada mes este separado por un guión -
(utilizar join). */
console.log("Result-3f", monthsArray.join('-'));

/* Exercise-3g: Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
const monthsArray1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dicember"];
console.log("Result-3g", monthsArray1.slice(4, 11));
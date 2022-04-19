/* Exercise-2a: Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase). */
var firstString = "I like playing the piano and reading in silence.";
var result2a = firstString.toUpperCase();
console.log("Result-2a", result2a);

/* Exercise-2b: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
5 caracteres guardando el resultado en una nueva variable (utilizar substring). */
var text = "Carla was filling the glass with water";
var result2b = text.substring(0, 5);
console.log("Result-2b", result2b);

/* Exercise-2c: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
3 caracteres guardando el resultado en una nueva variable (utilizar substring). */
var text = "Have a good day";
var result2c = text.substring(12, 15);
console.log("Result-2c", result2c);

/* Exercise-2d: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
toUpperCase, toLowerCase y el operador +). */
let newStr = "i LoVe JaZz MuSiC!";
let result2d = newStr.substring(0, 1).toUpperCase() + newStr.substring(1).toLowerCase();
console.log("Result-2d", result2d);

/* Exercise-2e: Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la
posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */
let otherStr = "Life is better together";
let result2e = otherStr.indexOf(" ");
console.log("Result-2e", result2e);

/* Exercise-2f: Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre
medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
operador +).*/
let lastStr = "maldonado sangermano";
let firstWord = lastStr.indexOf("m");
let secondWord = lastStr.indexOf("s");
console.log(firstWord, secondWord)
let result2f = lastStr.substring(0, 1).toUpperCase() + lastStr.substring(1, 10).toLowerCase() + lastStr.substring(10, 11).toLocaleUpperCase() + lastStr.substring(11).toLowerCase();
console.log("Result-2f", result2f);
//  Exercise-2a
var firstString = "I like playing the piano and reading in silence.";
var result2a = firstString.toUpperCase();
console.log("Result-2a", result2a);
//  Exercise-2b
var text = "Carla was filling the glass with water";
var result2b = text.substring(0, 5);
console.log("Result-2b", result2b);
// Exercise-2c
var text = "Have a good day";
var result2c = text.substring(12, 15);
console.log("Result-2c", result2c);
// Exercise-2d
let newStr = "i LoVe JaZz MuSiC!";
let result2d = newStr.substring(0, 1).toUpperCase() + newStr.substring(1).toLowerCase();
console.log("Result-2d", result2d);
// Exercise-2e
let otherStr = "Life is better together";
let result2e = otherStr.indexOf(" ");
console.log("Result-2e", result2e);
// Exercise-2f
let lastStr = "maldonado sangermano";
let firstWord = lastStr.indexOf("m");
let secondWord = lastStr.indexOf("s");
console.log(firstWord, secondWord)
let result2f = lastStr.substring(0, 1).toUpperCase() + lastStr.substring(1, 10).toLowerCase() + lastStr.substring(10, 11).toLocaleUpperCase() + lastStr.substring(11).toLowerCase();
console.log("Result-2f", result2f);
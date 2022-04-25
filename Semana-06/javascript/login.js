// Email validation
var inputEmail = document.getElementById('email');
var errorEmail = document.getElementById('error-email');
inputEmail.addEventListener("blur", emailBlur);
inputEmail.addEventListener("focus", emailFocus);

// Password validation
var inputPassword = document.getElementById('password');
var errorPassword = document.getElementById('error-password');
inputPassword.addEventListener("blur", passwordBlur);
inputPassword.addEventListener("focus", passwordFocus);

// FUNCTIONS
// Email validation
var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
function emailBlur() {
    if(emailRegex.test(inputEmail.value)) {
        inputEmail.style.borderColor = "green";
        errorEmail.innerHTML = "";
    } else {
        inputEmail.style.borderColor ="red";
        errorEmail.innerHTML = 'Please, enter a valid email.';
    }
}

function emailFocus() {
    errorEmail.innerHTML = ' ';
}

// Password validation
const arrayLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const arrayNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function passwordBlur() {
    var containsLetters = false;
    var containsNumbers = false;
    if (inputPassword.value.length < 8 || inputPassword.value.indexOf == " ") {
        inputPassword.style.borderColor ="red";
        return errorPassword.innerHTML = 'Enter at least 8 characters.';
    } else {
        for (let i = 0; i < inputPassword.value.length; i++) {
            const letter = inputPassword.value[i];
            if (arrayLetters.includes(letter.toLowerCase())) {
                containsLetters = true;
            } if (arrayNumbers.includes(letter)) {
                containsNumbers = true;
            }
            if (containsLetters && containsNumbers) {
                inputPassword.style.borderColor ="green";
                errorPassword.innerHTML = '';
            } else {
                inputPassword.style.borderColor ="red";
                errorPassword.innerHTML = 'Password must contain numbers and letters only.';
            }
        }
    }
}

function passwordFocus() {
    errorPassword.innerHTML = ' ';
}

// Button validation
// let buttonLogin = document.querySelector('button');
// buttonLogin.addEventListener('onclick');
// Variables
var nameInput = document.getElementById('name');
var email = document.getElementById('email');
var message = document.getElementById('message');

// Error validations
var errorName = document.getElementById('error-name');
var errorEmail = document.getElementById('error-email');
var errorMessage = document.getElementById('error-message');

// Events
nameInput.addEventListener('blur', nameBlur);
nameInput.addEventListener('focus', nameFocus);
email.addEventListener('blur', emailBlur);
email.addEventListener('focus', emailFocus);
message.addEventListener('blur', messageBlur);
message.addEventListener('focus', messageFocus);

// Validations variables
var nameValidation = false;
var emailValidation = false;
var messageValidation = false;

// FUNCTIONS
// Name: Required. Letters only and at least 3 letters.
function nameBlur() {
    const arrayLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if(nameInput.value.length < 3 || nameInput.value == '') {
        nameInput.style.borderColor = 'red';
        errorName.innerHTML = 'At least 3 characters.'
        nameValidation = false;
    } else {
        for (let i = 0; i < nameInput.value.length; i++) {
            const letter = nameInput.value[i];
            if (!arrayLetters.includes(letter.toLowerCase())) {
                nameInput.style.borderColor ="red";
                errorName.innerHTML = 'Must contain letters only.';
                nameValidation = false;
            } else {
                nameInput.style.borderColor ="green";
                errorName.innerHTML = '';
                nameValidation = true;
            }
        }
    }
    return nameValidation;
}
function nameFocus() {
    errorName.innerHTML = '';
}

// Email: Required. Valid email address.
function emailBlur() {
    var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(emailRegex.test(email.value)) {
        email.style.borderColor = "green";
        errorEmail.innerHTML = "";
        emailValidation = true;
    } else {
        email.style.borderColor ="red";
        errorEmail.innerHTML = 'Please, enter a valid email.';
        emailValidation = false;
    }
    return emailValidation;
}    
function emailFocus() {
    errorEmail.innerHTML = '';
}

// Message: Required. Alphanumeric. At least 3 characters.
function messageBlur() {
    const arrayLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var containsLetters = false;
    if (message.value.length < 3 || message.value =='') {
        message.style.borderColor ="red";
        errorMessage.innerHTML = 'At least 3 characters.';
        messageValidation = false;
    } else {
        for (let i = 0; i < message.value.length; i++) {
            const letter = message.value[i];
            if (arrayLetters.includes(letter.toLowerCase())) {
                containsLetters = true;
            } 
            if (containsLetters) {
                message.style.borderColor = "green";
                errorMessage.innerHTML = '';
                messageValidation = true;
            } else {
                message.style.borderColor = "red";
                errorMessage.innerHTML = 'Must contain letters.';
                messageValidation = false;
            }
        }
    }
    return messageValidation;
}
function messageFocus() {
    errorMessage.innerHTML = '';
}

// SEND button
var sendButton = document.getElementById('send');
sendButton.addEventListener('click', sendEvent);

function sendEvent() {
    if(nameValidation && emailValidation && messageValidation) {
        alert('Message sent successfully!');
    } else {
        alert('Please, check your information is correct.')
    }
}

// RESET button
var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetEvent);

function resetEvent() {
    nameInput.value = "";
    nameInput.style.borderColor = '#373867';
    errorName.innerHTML = '';
    email.value = "";
    email.style.borderColor = '#373867';
    errorEmail.innerHTML = '';
    message.value = "";
    message.style.borderColor = '#373867';
    errorMessage.innerHTML = '';
    document.getElementById('human-resources').checked = true;
}
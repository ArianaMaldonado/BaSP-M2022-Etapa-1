// Variables creation
var name = document.getElementById('name');
var surname = document.getElementById('surname');
var id = document.getElementById('id');
var date = document.getElementById('date');
var phone = document.getElementById('phone');
var address = document.getElementById('address');
var city = document.getElementById('city');
var postcode = document.getElementById('postcode');
var email = document.getElementById('email');
var password = document.getElementById('password');
var repeatPassword = document.getElementById('repeat-password');

// Error validations
var errorName = document.getElementById('error-name');
var errorSurname = document.getElementById('error-surname');
var errorId = document.getElementById('error-id');
var errorDate = document.getElementById('error-date');
var errorPhone = document.getElementById('error-phone');
var errorAddress = document.getElementById('error-address');
var errorCity = document.getElementById('error-city');
var errorPostcode = document.getElementById('error-postcode');
var errorEmail = document.getElementById('error-email');
var errorPassword = document.getElementById('error-password');
var errorRepeatPassword = document.getElementById('error-repeat-password');

// Events
name.addEventListener('blur', nameBlur);
name.addEventListener('focus', nameFocus);
surname.addEventListener('blur', surnameBlur);
surname.addEventListener('focus', surnameFocus);
id.addEventListener('blur', idBlur);
id.addEventListener('focus', idFocus);
date.addEventListener('blur', dateBlur);
date.addEventListener('focus', dateFocus);
phone.addEventListener('blur', phoneBlur);
phone.addEventListener('focus', phoneFocus);
address.addEventListener('blur', addressBlur);
address.addEventListener('focus', addressFocus);
city.addEventListener('blur', cityBlur);
city.addEventListener('focus', cityFocus);
postcode.addEventListener('blur', postcodeBlur);
postcode.addEventListener('focus', postcodeFocus);
email.addEventListener('blur', emailBlur);
email.addEventListener('focus', emailFocus);
password.addEventListener('blur', passwordBlur);
password.addEventListener('focus', passwordFocus);
repeatPassword.addEventListener('blur', repeatPasswordBlur);
repeatPassword.addEventListener('focus', repeatPasswordFocus);

// Validation variables
var nameValidation = false;
var surnameValidation = false;
var idValidation = false;
var dateValidation = false;
var phoneValidation = false;
var addressValidation = false;
var cityValidation = false;
var postcodeValidation = false;
var emailValidation = false;
var passwordValidation = false;
var repeatPasswordValidation = false;

// 'SIGN UP' button
//VER BOTONES, ESTÁN COMO LINKS

// Functions
/* Nombre: Solo letras y debe tener más de 3 letras. 
Apellido: Solo letras y debe tener más de 3 letras. 
DNI: Solo número y debe tener más de 7 números. 
Fecha de Nacimiento: Con formato dd/mm/aaaa.
Teléfono: Solo número y debe tener 10 números.
Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio.
Localidad: Texto alfanumérico y debe tener más de 3 letras. 
Código Postal: Solo número y debe tener entre 4 y 5 números. 
Email: Debe tener un formato de email válido.
Contraseña: Al menos 8 caracteres, formados por letras y números.
Repetir Contraseña: Al menos 8 caracteres, formados por letras y números. */

// Name
function nameBlur() {
    if(name.value.length < 3 || name.value.length == ' ') {
        name.style.borderColor = 'red';
        errorName.innerHTML('At least 3 characters.')
    }
    return nameValidation;
}

// Surname

// ID

// Date of birth

// Phone

// Address

// City

// Postcode

// Email
var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
function emailBlur() {
    if(emailRegex.test(inputEmail.value)) {
        inputEmail.style.borderColor = "green";
        errorEmail.innerHTML = "";
        emailValidate = true;
    } else {
        inputEmail.style.borderColor ="red";
        errorEmail.innerHTML = 'Please, enter a valid email.';
        emailValidate = false;
    }
    return emailValidate;
}
console.log("Let's see if this is working");    

// Password

// Repeat Password
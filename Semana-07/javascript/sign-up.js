// Variables
var nameInput = document.getElementById('name');
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
nameInput.addEventListener('blur', nameBlur);
nameInput.addEventListener('focus', nameFocus);
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

// FUNCTIONS
const arrayLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const arrayNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Name: Letters only. At least 3 letters.
function nameBlur() {
    const arrayLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if(nameInput.value.length < 3 || nameInput.value == '') {
        nameInput.style.borderColor = 'red';
        errorName.innerHTML = 'At least 3 characters.';
        nameValidation = false;
    } else {
        for (let i = 0; i < nameInput.value.length; i++) {
            const letter = nameInput.value[i];
            if (!arrayLetters.includes(letter.toLowerCase())) {
                nameInput.style.borderColor ='red';
                errorName.innerHTML = 'Must contain letters only.';
                nameValidation = false;
            } else {
                nameInput.style.borderColor ='green';
                errorName.innerHTML = '';
                nameValidation = true;
            }
        };
    };
    return nameValidation;
};
function nameFocus() {
    errorName.innerHTML = '';
};
                
// Surname: Letters only. At least 3 letters.
function surnameBlur() {
    const arrayLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if(surname.value.length < 3 || surname.value == '') {
        surname.style.borderColor = 'red';
        errorSurname.innerHTML = 'At least 3 characters.';
        surnameValidation = false;
    } else {
        for (let i = 0; i < surname.value.length; i++) {
            const letter = surname.value[i];
            if (!arrayLetters.includes(letter.toLowerCase())) {
                surname.style.borderColor ='red';
                errorSurname.innerHTML = 'Must contain letters only.';
                surnameValidation = false;
            } else {
                surname.style.borderColor ='green';
                errorSurname.innerHTML = '';
                surnameValidation = true;
            }
        };
    };
    return surnameValidation;
};
function surnameFocus() {
    errorSurname.innerHTML = '';
};

// ID: Numbers only. More than 7 numbers.
function idBlur() {
    if(id.value.length < 7 || id.value == '') {
        id.style.borderColor = 'red';
        errorId.innerHTML = 'At least 7 characters.';
        idValidation = false;
    } else {
        if (isNaN(id.value)) {
            id.style.borderColor ='red';
            errorId.innerHTML = 'Must contain numbers only.';
            idValidation = false;
        } else {
            id.style.borderColor ='green';
            errorId.innerHTML = '';
            idValidation = true;
        }
    };
    return idValidation;
};
function idFocus() {
    errorId.innerHTML = '';
};

// Date of birth: dd/mm/yyyy.
function dateBlur() {
    var age = 0;
    var actualDay = new Date();
    var birthday = new Date(date.value);
    var years = actualDay.getFullYear() - birthday.getFullYear();
    var month = actualDay.getMonth() - birthday.getMonth();
    if (month < 0 || (month === 0 && actualDay.getDate() < birthday.getDate())) {
        age = years--;
    } else {
        age = years;
    } if (age >= 18) {
        date.style.borderColor = 'green';
        errorDate.innerHTML = '';
        dateValidation = true;
    } else {
        date.style.borderColor = 'red';
        errorDate.innerHTML = 'You must be over 18 years old.';
        dateValidation = false;
    }
    return dateValidation;
};
function dateFocus() {
    errorDate.innerHTML = '';
};

// Phone Number: Numbers only. Must contains 10 numbers.
function phoneBlur() {
    if(phone.value.length !== 10 || phone.value == '' || isNaN(phone.value)) {
        phone.style.borderColor = 'red';
        errorPhone.innerHTML = 'Must contain 10 characters and numbers only.';
        phoneValidation = false;
    } else {
        phone.style.borderColor ='green';
        errorPhone.innerHTML = '';
        phoneValidation = true;
    }
    return phoneValidation;
};
function phoneFocus() {
    errorPhone.innerHTML = '';
};

// Address: At least 5 characters. Must contain letters and numbers with a space between.
function addressBlur() {
    var containsLetters = false;
    var containsNumbers = false;
    if (address.value.length < 5 || address.value === '') {
        address.style.borderColor ='red';
        errorAddress.innerHTML = 'At least 5 characters.';
        addressValidation = false;
    } else {
        for (let i = 0; i < address.value.length; i++) {
            const letter = address.value[i];
            if (arrayLetters.includes(letter.toLowerCase())) {
                containsLetters = true;
            } if (arrayNumbers.includes(letter)) {
                containsNumbers = true;
            }
            const spaceBetween = address.value.indexOf(' ');
            if (containsLetters && containsNumbers && spaceBetween > 0 && spaceBetween < address.value.length -1) {
                address.style.borderColor ='green';
                errorAddress.innerHTML = '';
                addressValidation = true;
            } else {
                address.style.borderColor ='red';
                errorAddress.innerHTML = 'Must contain letters and numbers separated by a space.';
                addressValidation = false;
            }
        };
    };
    return addressValidation;
};
function addressFocus() {
    errorAddress.innerHTML = '';
};

// City: Alphanumeric text. At least 3 letters.
function cityBlur() {
    var containsLetters = false;
    if (city.value.length <= 3 || city.value =='') {
        city.style.borderColor ='red';
        errorCity.innerHTML = 'Must contain more than 3 characters.';
        cityValidation = false;
    } else {
        for (let i = 0; i < city.value.length; i++) {
            const letter = city.value[i];
            if (arrayLetters.includes(letter.toLowerCase())) {
                containsLetters = true;
            } if (containsLetters) {
                city.style.borderColor ='green';
                errorCity.innerHTML = '';
                cityValidation = true;
            } else {
                city.style.borderColor ='red';
                errorCity.innerHTML = 'Must contain letters.';
                cityValidation = false;
            }
        };
    };
    return cityValidation;
};
function cityFocus() {
    errorCity.innerHTML = '';
};
// Postcode: Numbers only. Must contain between 4 and 5 characters.
function postcodeBlur() {
    if(postcode.value.length < 4 || postcode.value.length > 5 || postcode.value == '' || isNaN(postcode.value)) {
        postcode.style.borderColor = 'red';
        errorPostcode.innerHTML = 'Must contain 4 or 5 characters and numbers only.';
        postcodeValidation = false;
    } else {
        postcode.style.borderColor ='green';
        errorPostcode.innerHTML = '';
        postcodeValidation = true;
    }
    return postcodeValidation;
};
function postcodeFocus() {
    errorPostcode.innerHTML = '';
};

// Email
function emailBlur() {
    var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(emailRegex.test(email.value)) {
        email.style.borderColor = 'green';
        errorEmail.innerHTML = '';
        emailValidation = true;
    } else {
        email.style.borderColor ='red';
        errorEmail.innerHTML = 'Please, enter a valid email.';
        emailValidation = false;
    }
    return emailValidation;
}; 
function emailFocus() {
    errorEmail.innerHTML = '';
};

// Password: At least 8 characters. Must contain numbers and letters.
function passwordBlur() {
    var containsLetters = false;
    var containsNumbers = false;
    if (password.value.length < 8 || password.value.indexOf == ' ') {
        password.style.borderColor ='red';
        errorPassword.innerHTML = 'At least 8 characters.';
        passwordValidation = false;
    } else {
        for (let i = 0; i < password.value.length; i++) {
            const letter = password.value[i];
            if (arrayLetters.includes(letter.toLowerCase())) {
                containsLetters = true;
            } if (arrayNumbers.includes(letter)) {
                containsNumbers = true;
            } if (containsLetters && containsNumbers) {
                password.style.borderColor ='green';
                errorPassword.innerHTML = '';
                passwordValidation = true;
            } else {
                password.style.borderColor ='red';
                errorPassword.innerHTML = 'Must contain numbers and letters.';
                passwordValidation = false;
            }
        };
    };
    return passwordValidation;
};
function passwordFocus() {
    errorPassword.innerHTML = '';
};

// Repeat Password: At least 8 characters. Must contain number and letter and coincide with 'Password'.
function repeatPasswordBlur() {
    if (repeatPassword.value === password.value && repeatPassword.value) {
        repeatPassword.style.borderColor = 'green';
        repeatPasswordValidation = true;
    } else {
        repeatPassword.style.borderColor = 'red';
        errorRepeatPassword.innerHTML = 'Password must coincide.';
        repeatPasswordValidation = false;
    }
};
function repeatPasswordFocus() {
    errorRepeatPassword.innerHTML = '';
};

function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
  
    return month + '/' + day + '/' + year;
}

// 'CREATE' button
var create = document.getElementById('create');
create.addEventListener('click', createEvent);

function createEvent() {
    if (
        nameValidation
        && surnameValidation
        && idValidation
        && dateValidation
        && phoneValidation
        && addressValidation
        && cityValidation
        && postcodeValidation
        && emailValidation
        && passwordValidation
        && repeatPasswordValidation
    ) {
        fetch(`https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${nameInput.value}&lastName=${surname.value}&dni=${id.value}&dob=${getFormattedDate(new Date(date.value))}&phone=${phone.value}&address=${address.value}&city=${city.value}&zip=${postcode.value}&email=${email.value}&password=${password.value}&repeatPassword=${repeatPassword.value}`)
        .then(response => response.json())
        .then(data => {
                if(data.success) {
                    localStorage.setItem('name', nameInput.value);
                    localStorage.setItem('surname', surname.value);
                    localStorage.setItem('id', id.value);
                    localStorage.setItem('date of birth', date.value);
                    localStorage.setItem('phone number', phone.value);
                    localStorage.setItem('address', address.value);
                    localStorage.setItem('city', city.value);
                    localStorage.setItem('postcode', postcode.value);
                    localStorage.setItem('email', email.value);
                    localStorage.setItem('password', password.value);
                    localStorage.setItem('repeat pasword', repeatPassword.value);
                    alert('Sign up successful! Name: ' + nameInput.value
                    + '. Surname: ' + surname.value
                    + '. Id: ' + id.value
                    + '. Date of birth: ' + date.value
                    + '. Phone Number: ' + phone.value
                    + '. Address: ' + address.value
                    + '. City: ' + city.value
                    + '. Postcode: ' + postcode.value
                    + '. Email: ' + email.value
                    + '. Password: ' + password.value
                    + '. Repeat Password: ' + repeatPassword.value + '. Please, confirm.');
                    document.getElementById('my-form').reset();
                    nameInput.style.borderColor = '#373867';
                    surname.style.borderColor = '#373867';
                    id.style.borderColor = '#373867';
                    date.style.borderColor = '#373867';
                    phone.style.borderColor = '#373867';
                    address.style.borderColor = '#373867';
                    city.style.borderColor = '#373867';
                    postcode.style.borderColor = '#373867';
                    email.style.borderColor = '#373867';
                    password.style.borderColor = '#373867';
                    repeatPassword.style.borderColor = '#373867';
                } else {
                    alert('Something is wrong.');
                }
            })
            .catch(error => console.error(error));
    } else {
        nameBlur();
        surnameBlur();
        idBlur();
        dateBlur();
        phoneBlur();
        addressBlur();
        cityBlur();
        postcodeBlur();
        emailBlur();
        passwordBlur();
        repeatPasswordBlur();
        alert('Please, check you information is correct.');
    }
};
window.onload = function(){
    nameInput.value = localStorage.getItem('name');
    surname.value = localStorage.getItem('surname');
    id.value = localStorage.getItem('id');
    date.value = localStorage.getItem('date');
    phone.value = localStorage.getItem('phone number');
    address.value = localStorage.getItem('address');
    city.value = localStorage.getItem('city');
    postcode.value = localStorage.getItem('postcode');
    email.value = localStorage.getItem('email');
    password.value = localStorage.getItem('password');
    repeatPassword.value = localStorage.getItem('password');
};
const passwordEl = document.getElementById('password');
const lenght = 8
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~{}|[]<>/!;:.";

const allChars = upperCase + lowerCase + number + symbol;

function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordEl.value = password;
}


function copyPassword() {
    passwordEl.select();
    navigator.clipboard.writeText(passwordEl.value)
    alert("Copied the text: " + passwordEl.value);
}


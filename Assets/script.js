// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Define variables
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let special = " !@#$%^&*_-+=}{][:;',./<>?";
let password = "";
let randomPassword = "";

// Create random password
function generatePassword () {

    // Confirm password characters 
    var confirmLowercase = confirm ("Do you want to use lowercase characters?");
    var confirmUppercase = confirm ("Do you want to use uppercase characters?");
    var confirmNumbers = confirm ("Do you want to use numeric characters?");
    var confirmSpecial = confirm ("Do you want to use special characters?");

    // Must select at least one prompt
    while (confirmLowercase == false && confirmUppercase == false && confirmNumbers == false && confirmSpecial == false) {
        alert("You must pick atleast one character type");
        confirmLowercase = confirm ("Do you want to use lowercase characters?");
        confirmUppercase = confirm ("Do you want to use uppercase characters?");
        confirmNumbers = confirm ("Do you want to use numeric characters?");
        confirmSpecial = confirm ("Do you want to use special characters?");
    }

    // confirm password length
    var length = parseInt (prompt ("How many characters do you want your password to have?"));

    // Must be between 8 and 128 characters
    while (length < 8 || length > 128) {
        alert ("You must pick between 8 and 128 characters")
        length = parseInt (prompt ("How many characters do you want your password to have?"));
    }

    if (confirmLowercase){
        randomPassword = randomPassword.concat(lowercase);
    }

    if (confirmUppercase){
        randomPassword = randomPassword.concat(uppercase);
    }
    if (confirmNumbers){
        randomPassword = randomPassword.concat(numbers);
    }
    if (confirmSpecial){
        randomPassword = randomPassword.concat(special);
    }

    // Generate random password
    for (var i = 0; i < length; i++) {
        password = password + randomPassword[Math.floor(Math.random() * randomPassword.length)];
    }

    passwordText.value = password;

}
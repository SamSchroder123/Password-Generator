// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  length = prompt("Length of password:");
  while (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters long.");
    length = prompt("Length of password:");
  }

  alert(
    "type y/n to select/deselect the following character sets to be included in your password."
  );

  hasLowerCase = prompt("Lowercase? (y/n):");
  hasLowerCase = hasLowerCase.toLowerCase();
  while (hasLowerCase != "y" && hasLowerCase != "n") {
    alert("input must be 'y' or 'n' ");
    hasLowerCase = prompt("Lowercase? (y/n):");
    hasLowerCase = hasLowerCase.toLowerCase();
  }

  hasUpperCase = prompt("Uppercase? (y/n):");
  hasUpperCase = hasUpperCase.toLowerCase();
  while (hasUpperCase != "y" && hasUpperCase != "n") {
    alert("input must be 'y' or 'n' ");
    hasUpperCase = prompt("Uppercase? (y/n):");
    hasUpperCase = hasUpperCase.toLowerCase();
  }

  hasNumeric = prompt("Numeric? (y/n):");
  hasNumeric = hasNumeric.toLowerCase();
  while (hasNumeric != "y" && hasNumeric != "n") {
    alert("input must be 'y' or 'n' ");
    hasNumeric = prompt("Numeric? (y/n):");
    hasNumeric = hasNumeric.toLowerCase();
  }

  hasSpecial = prompt("Special? (y/n):");
  hasSpecial = hasSpecial.toLowerCase();
  while (hasSpecial != "y" && hasSpecial != "n") {
    alert("input must be 'y' or 'n' ");
    hasSpecial = prompt("Special? (y/n):");
    hasSpecial = hasSpecial.toLowerCase();
  }
  // alert(length);
  // alert(hasLowerCase);
  // alert(hasUpperCase);
  // alert(hasNumeric);
  // alert(hasSpecial);

  var passwordSettings = {
    length: length,
    lower: hasLowerCase,
    upper: hasUpperCase,
    numeric: hasNumeric,
    special: hasSpecial,
  };

  return passwordSettings;
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  var settings = getPasswordOptions();
  console.log(settings.length);
  console.log(settings.lower);
  console.log(settings.upper);
  console.log(settings.numeric);
  console.log(settings.special);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

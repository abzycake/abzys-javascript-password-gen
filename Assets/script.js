// declaring uppercase characters for password generation
var uppercaseChars = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// declaring lowercase characters for password generation
var lowercaseChars = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// declaring numbers for password generation
var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// declaring special characters for password generation
var specialChars = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// querying user on password preferences
function getPasswordCriteria() {
  let userChoices = [];
  let passLength = prompt("How many characters do you want your password to be?");

  if (passLength === null) {
    alert("Please try again.");
    return getPasswordCriteria(); // recursive function to restart if input is invalid
  }

  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Your password must be between 8 and 128 characters.");
    return getPasswordCriteria(); // recursive function to restart if input is out of bounds
  }
  
  let upperChoice = confirm("Would you like your password to contain uppercase characters?");
  if (upperChoice) {
    userChoices = userChoices.concat(uppercaseChars);
  }
  let lowerChoice = confirm("Would you like your password to contain lowercase characters?");
  if (lowerChoice) {
    userChoices = userChoices.concat(lowercaseChars);
  }
  let numberChoice = confirm("Would you like your password to contain numbers?");
  if (numberChoice) {
    userChoices = userChoices.concat(numericChars);
  }
  let specialChoice = confirm("Would you like your password to contain special characters?");
  if (specialChoice) {
    userChoices = userChoices.concat(specialChars);
  }
  console.log(userChoices);

  return { passLength, userChoices };
}

// grabs a random element from the declared characters
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// generates password from user criteria
function generatePassword() {
  let userOptions = getPasswordCriteria();
  console.log(userOptions);
  let password = '';

  if (userOptions.userChoices.length === 0) {
    alert("Please select at least one character type.");
    return generatePassword(); // recursive function to restart if no character types are selected
  }

  for (let i = 0; i < userOptions.passLength; i++) {
    password += getRandomElement(userOptions.userChoices);
  }

  return password;
}

var generateButton = document.querySelector('#generate');

// passes generated string to #password
function writePassword() {
  var password = generatePassword();
  var passwordField = document.querySelector('#password');

  passwordField.value = password;
}

// generate button event listener
generateButton.addEventListener('click', writePassword);

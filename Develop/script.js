// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {
  var userInput = prompt("How many characters would you like your password to contain?")
  var passwordLenght = parseInt(userInput)

  if (isNaN(passwordLenght)) {
    alert("That's not a number!")
    return
  }

  if (passwordLenght < 8 || passwordLenght > 128) {
    alert("Passwoord lenght must be between 8 and 128 characters")
    return
  }

  var userWantsCharacters = confirm("Click OK to confirm including special characters")
  var userWantsNumbers = confirm("Click OK to confirm including numeric characters")
  var userWantsLowercase = confirm("Click OK to confirm including lowercase characters")
  var userWantsUppercase = confirm("Click OK to confirm including uppercase characters")

  var characters = ["@", "&", "*", "%"]
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercase = []

  var userSelection = []

  for (var i = 0; i < lowercase.length; i++) {
    uppercase[i] = lowercase[i].toUpperCase()
  }
  if (userWantsCharacters === true) {
    userSelection.push(characters)
  }

  if (userWantsNumbers === true) {
    userSelection.push(numbers)
  }

  if (userWantsLowercase === true) {
    userSelection.push(lowercase)
  }

  if (userWantsUppercase === true) {
    userSelection.push(uppercase)
  }

  if (userSelection.length === 0) {
    userSelection.push(lowercase)
  }

  var generatePassword = ""

  for (var i = 0; i < passwordLenght; i++) {
    var randomList = getRandomItem(userSelection)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar
  }

  return generatePassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

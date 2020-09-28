// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passwordComplete = "";

function generatePassword() {
  var lowerAlphas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                     'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                     'w', 'x', 'y', 'z'];
  var upperAlphas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
                     'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
                     'W', 'X', 'Y', 'Z'];
  var specialChars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+',
                      ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@',
                      '[', ']', '^', '_', '`', '{', '}', '|'];
  var allNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowerQuestion = false;
  var upperQuestion = false;
  var numberQuestion = false;
  var specialQuestion = false;
  var passwordLength = 0;
  var lowerAlphasCounter = 0;
  var upperAlphasCounter = 0;
  var numbersCounter = 0;
  var specialCounter = 0;
  var k = 0;

  for (var i = 0; i < 1; i++) {
    lowerQuestion = confirm('Would you like lowercase letters? Okay for yes, cancel for no.');
    upperQuestion = confirm('Would you like uppercase letters? Okay for yes, cancel for no.');
    numberQuestion = confirm('Would you like numbers? Okay for yes, cancel for no.');
    specialQuestion = confirm('Would you like special characters? Okay for yes, cancel for no.');
    passwordLength = prompt('How long would you like your password? (8+ characters)');
    passwordLength = Number(passwordLength);

    if ((passwordLength < 8 || passwordLength > 128) && (lowerQuestion == false && upperQuestion == false && numberQuestion == false && specialQuestion == false)) {
      alert('Your password must be at least 8 to 128 characters AND you must select at least one password requirement.');
      lowerQuestion = false;
      upperQuestion = false;
      numberQuestion = false;
      specialQuestion = false;
      passwordLength = 0;
      writePassword();
      console.log(passwordComplete);
    }

    if ((passwordLength < 8 || passwordLength > 128) && (lowerQuestion == true || upperQuestion == true || numberQuestion == true || specialQuestion == true)) {
      alert('You must enter a password length between 8 and 128!');
      lowerQuestion = false;
      upperQuestion = false;
      numberQuestion = false;
      specialQuestion = false;
      passwordLength = 0;
      generatePassword();
      console.log(passwordComplete);
    }

    if ((passwordLength >= 8 && passwordLength <= 128) && (lowerQuestion == false && upperQuestion == false && numberQuestion == false && specialQuestion == false)) {
      alert('You must select at least one of the password requirements!');
      lowerQuestion = false;
      upperQuestion = false;
      numberQuestion = false;
      specialQuestion = false;
      passwordLength = 0;
      writePassword();
      console.log(passwordComplete);
    }

    if ((passwordLength >= 8 && passwordLength <= 128) && (lowerQuestion == true || upperQuestion == true || numberQuestion == true || specialQuestion == true)) {
      if (lowerQuestion == true && upperQuestion == true && numberQuestion == true && specialQuestion == true) {
        for (var j = 0; j < passwordLength; j++){
          var num = Math.floor(Math.random() * 4);
          if (num == 0) {
            var lowerNum = 0;
            lowerNum = Math.floor(Math.random() * 26);
            passwordComplete += lowerAlphas[lowerNum];
            lowerAlphasCounter++;
            k++;
          }
          if (num == 1) {
            var upperNum = 0;
            upperNum = Math.floor(Math.random() * 26);
            passwordComplete += upperAlphas[upperNum];
            upperAlphasCounter++
            k++;
          }
          if (num == 2) {
            var numberNum = 0;
            numberNum = Math.floor(Math.random() * 10);
            passwordComplete += allNumbers[numberNum];
            numbersCounter++;
            k++;
          }
          if (num == 3) {
            var specialNum = 0;
            specialNum = Math.floor(Math.random() * 30);
            passwordComplete += specialChars[specialNum];
            specialCounter++;
            k++;
          }
          if ((k == passwordLength) && (lowerAlphasCounter < 1 || upperAlphasCounter < 1 || numbersCounter < 1 || specialCounter < 1)) {
            j = -1;
            k = 0;
            lowerAlphasCounter = 0;
            upperAlphasCounter = 0;
            numbersCounter = 0;
            specialCounter = 0;
            passwordComplete = "";
          }
        }
      }
      if (lowerQuestion == true && upperQuestion == true && numberQuestion == true && specialQuestion == false) {
        for (var j = 0; j < passwordLength; j++){
          var num = Math.floor(Math.random() * 3);
          if (num == 0) {
            var lowerNum = 0;
            lowerNum = Math.floor(Math.random() * 26);
            passwordComplete += lowerAlphas[lowerNum];
            lowerAlphasCounter++;
            k++;
          }
          if (num == 1) {
            var upperNum = 0;
            upperNum = Math.floor(Math.random() * 26);
            passwordComplete += upperAlphas[upperNum];
            upperAlphasCounter++
            k++;
          }
          if (num == 2) {
            var numberNum = 0;
            numberNum = Math.floor(Math.random() * 10);
            passwordComplete += allNumbers[numberNum];
            numbersCounter++;
            k++;
          }
          if ((k == passwordLength) && (lowerAlphasCounter < 1 || upperAlphasCounter < 1 || numbersCounter < 1 )) {
            j = -1;
            k = 0;
            lowerAlphasCounter = 0;
            upperAlphasCounter = 0;
            numbersCounter = 0;
            passwordComplete = "";
          }
        }
      }
      if (lowerQuestion == true && upperQuestion == true && numberQuestion == false && specialQuestion == false) {
        for (var j = 0; j < passwordLength; j++){
          var num = Math.floor(Math.random() * 2);
          if (num == 0) {
            var lowerNum = 0;
            lowerNum = Math.floor(Math.random() * 26);
            passwordComplete += lowerAlphas[lowerNum];
            lowerAlphasCounter++;
            k++;
          }
          if (num == 1) {
            var upperNum = 0;
            upperNum = Math.floor(Math.random() * 26);
            passwordComplete += upperAlphas[upperNum];
            upperAlphasCounter++
            k++;
          }
          if ((k == passwordLength) && (lowerAlphasCounter < 1 || upperAlphasCounter < 1)) {
            j = -1;
            k = 0;
            lowerAlphasCounter = 0;
            upperAlphasCounter = 0;
            numbersCounter = 0;
            passwordComplete = "";
          }
        }
      }
      if (lowerQuestion == true && upperQuestion == false && numberQuestion == true && specialQuestion == false) {
        for (var j = 0; j < passwordLength; j++){
          var num = Math.floor(Math.random() * 2);
          if (num == 0) {
            var lowerNum = 0;
            lowerNum = Math.floor(Math.random() * 26);
            passwordComplete += lowerAlphas[lowerNum];
            lowerAlphasCounter++;
            k++;
          }
          if (num == 1) {
            var numberNum = 0;
            numberNum = Math.floor(Math.random() * 10);
            passwordComplete += allNumbers[numberNum];
            numbersCounter++;
            k++;
          }
          if ((k == passwordLength) && (lowerAlphasCounter < 1 || numbersCounter < 1)) {
            j = -1;
            k = 0;
            lowerAlphasCounter = 0;
            numbersCounter = 0;
            passwordComplete = "";
          }
        }
      }
      if (lowerQuestion == true && upperQuestion == false && numberQuestion == false && specialQuestion == false) {
        for (var j = 0; j < passwordLength; j++){
          var lowerNum = 0;
          lowerNum = Math.floor(Math.random() * 26);
          passwordComplete += lowerAlphas[lowerNum];
        }
      }
      if (lowerQuestion == true && upperQuestion == true && numberQuestion == false && specialQuestion == true) {
        for (var j = 0; j < passwordLength; j++){
          var num = Math.floor(Math.random() * 3);
          if (num == 0) {
            var lowerNum = 0;
            lowerNum = Math.floor(Math.random() * 26);
            passwordComplete += lowerAlphas[lowerNum];
            lowerAlphasCounter++;
            k++;
          }
          if (num == 1) {
            var upperNum = 0;
            upperNum = Math.floor(Math.random() * 26);
            passwordComplete += upperAlphas[upperNum];
            upperAlphasCounter++
            k++;
          }
          if (num == 2) {
            var specialNum = 0;
            specialNum = Math.floor(Math.random() * 30);
            passwordComplete += specialChars[specialNum];
            specialCounter++;
            k++;
          }
          if ((k == passwordLength) && (lowerAlphasCounter < 1 || upperAlphasCounter < 1 || specialCounter < 1)) {
            j = -1;
            k = 0;
            lowerAlphasCounter = 0;
            upperAlphasCounter = 0;
            specialCounter = 0;
            passwordComplete = "";
          }
        }
      }
      if (lowerQuestion == true && upperQuestion == false && numberQuestion == false && specialQuestion == true) {
        for (var j = 0; j < passwordLength; j++){
          var num = Math.floor(Math.random() * 2);
          if (num == 0) {
            var lowerNum = 0;
            lowerNum = Math.floor(Math.random() * 26);
            passwordComplete += lowerAlphas[lowerNum];
            lowerAlphasCounter++;
            k++;
          }
          if (num == 1) {
            var specialNum = 0;
            specialNum = Math.floor(Math.random() * 30);
            passwordComplete += specialChars[specialNum];
            specialCounter++;
            k++;
          }
          if ((k == passwordLength) && (lowerAlphasCounter < 1 || specialCounter < 1)) {
            j = -1;
            k = 0;
            lowerAlphasCounter = 0;
            specialCounter = 0;
            passwordComplete = "";
          }
        }
      }
      if (lowerQuestion == true && upperQuestion == false && numberQuestion == true && specialQuestion == true) {
        for (var j = 0; j < passwordLength; j++){
          var num = Math.floor(Math.random() * 3);
          if (num == 0) {
            var lowerNum = 0;
            lowerNum = Math.floor(Math.random() * 26);
            passwordComplete += lowerAlphas[lowerNum];
            lowerAlphasCounter++;
            k++;
          }
          if (num == 1) {
            var numberNum = 0;
            numberNum = Math.floor(Math.random() * 10);
            passwordComplete += allNumbers[numberNum];
            numbersCounter++;
            k++;
          }
          if (num == 2) {
            var specialNum = 0;
            specialNum = Math.floor(Math.random() * 30);
            passwordComplete += specialChars[specialNum];
            specialCounter++;
            k++;
          }
          if ((k == passwordLength) && (lowerAlphasCounter < 1 || numbersCounter < 1 || specialCounter < 1)) {
            j = -1;
            k = 0;
            lowerAlphasCounter = 0;
            numbersCounter = 0;
            specialCounter = 0;
            passwordComplete = "";
          }
        }
      }
      if (lowerQuestion == false && upperQuestion == true && numberQuestion == true && specialQuestion == true) {
        for (var j = 0; j < passwordLength; j++){
          var num = Math.floor(Math.random() * 3);
          if (num == 0) {
            var upperNum = 0;
            upperNum = Math.floor(Math.random() * 26);
            passwordComplete += upperAlphas[upperNum];
            upperAlphasCounter++
            k++;
          }
          if (num == 1) {
            var numberNum = 0;
            numberNum = Math.floor(Math.random() * 10);
            passwordComplete += allNumbers[numberNum];
            numbersCounter++;
            k++;
          }
          if (num == 2) {
            var specialNum = 0;
            specialNum = Math.floor(Math.random() * 30);
            passwordComplete += specialChars[specialNum];
            specialCounter++;
            k++;
          }
          if ((k == passwordLength) && (upperAlphasCounter < 1 || numbersCounter < 1 || specialCounter < 1)) {
            j = -1;
            k = 0;
            upperAlphasCounter = 0;
            numbersCounter = 0;
            specialCounter = 0;
            passwordComplete = "";
          }
        }
      }
      if (lowerQuestion == false && upperQuestion == true && numberQuestion == false && specialQuestion == true) {
        for (var j = 0; j < passwordLength; j++){
          var num = Math.floor(Math.random() * 2);
          if (num == 0) {
            var upperNum = 0;
            upperNum = Math.floor(Math.random() * 26);
            passwordComplete += upperAlphas[upperNum];
            upperAlphasCounter++
            k++;
          }
          if (num == 1) {
            var specialNum = 0;
            specialNum = Math.floor(Math.random() * 30);
            passwordComplete += specialChars[specialNum];
            specialCounter++;
            k++;
          }
          if ((k == passwordLength) && (upperAlphasCounter < 1 || specialCounter < 1)) {
            j = -1;
            k = 0;
            upperAlphasCounter = 0;
            specialCounter = 0;
            passwordComplete = "";
          }
        }
      }
      if (lowerQuestion == false && upperQuestion == true && numberQuestion == false && specialQuestion == false) {
        for (var j = 0; j < passwordLength; j++){
            var upperNum = 0;
            upperNum = Math.floor(Math.random() * 26);
            passwordComplete += upperAlphas[upperNum];
        }
      }
      if (lowerQuestion == false && upperQuestion == true && numberQuestion == true && specialQuestion == false) {
        for (var j = 0; j < passwordLength; j++){
          var num = Math.floor(Math.random() * 2);
          if (num == 0) {
            var upperNum = 0;
            upperNum = Math.floor(Math.random() * 26);
            passwordComplete += upperAlphas[upperNum];
            upperAlphasCounter++
            k++;
          }
          if (num == 1) {
            var numberNum = 0;
            numberNum = Math.floor(Math.random() * 10);
            passwordComplete += allNumbers[numberNum];
            numbersCounter++;
            k++;
          }
          if ((k == passwordLength) && (upperAlphasCounter < 1 || numbersCounter < 1)) {
            j = -1;
            k = 0;
            upperAlphasCounter = 0;
            numbersCounter = 0;
            passwordComplete = "";
          }
        }
      }
      if (lowerQuestion == false && upperQuestion == false && numberQuestion == true && specialQuestion == false) {
        for (var j = 0; j < passwordLength; j++) {
          var numberNum = 0;
          numberNum = Math.floor(Math.random() * 10);
          passwordComplete += allNumbers[numberNum];
        }
      }
      if (lowerQuestion == false && upperQuestion == false && numberQuestion == false && specialQuestion == true) {
        for (var j = 0; j < passwordLength; j++) {
            var specialNum = 0;
            specialNum = Math.floor(Math.random() * 30);
            passwordComplete += specialChars[specialNum];
        }
      }
    }
  }
  return passwordComplete;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

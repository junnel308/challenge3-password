// Assignment Code
var generateBtn = document.querySelector("#generate");

var charLowercase = "abcdefghijklmnopqrstuvwxyz";
var charUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNumbers = "0123456789";
var charSpecialCharacters = "'!#$%&()*+,-./:;<=>?@[]^_`{|}~'";

// Write password to the #password input
function writePassword() {
  var passLength;
  var choice1;
  var choice2;
  var choice3;
  var choice4;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Make prompts appear after clicking
generateBtn.addEventListener("click", writePassword);

//functions that included all of the conditions for the prompts.
function generatePassword() {
// prompts user to input in length of the password
while (true) {
  passLength =  prompt("How many characters would you like to include? (Minimum of 8 character and Maximum of 128)");
  if(passLength >= 8 && passLength <= 128) {
    if(window.confirm("Is the character length" + " " + passLength + " " + "ok?")) {
        alert(passLength + " " + "characters added");
        break;
      } else {
        alert("Please choose a different number   (Number of characters must be minimum of 8 and no more than 128 maximum)");
      } 
    } else {
        alert("Number of characters must be minimum of 8 and no more than 128 maximum.");
    }
  }

//prompts user to input if lowercase should be included
while (true) {
  choice1 = prompt("Would you like to include lowercase letters?   (  y / n  )");
    if (choice1 === "y" || choice1 === "Y") {
      if(window.confirm("Press 'Ok' to confirm! otherwise press 'Cancel' to NOT add lowercase")){
        charLowercase = "abcdefghijklmnopqrstuvwxyz";
        alert("Lowercase characters added!");
        break;
      } else {
        charLowercase = "";
        alert("Lowercase characters will NOT be added!");
        break;
      }
    } else if (choice1 === "n" || choice1 === "N") {
      if(window.confirm("Press 'Ok' to confirm! otherwise press 'Cancel' to add lowercase")){
        charLowercase = "";
        alert("Lowercase characters will NOT be added!");
        break;
      } else {
        charLowercase = "abcdefghijklmnopqrstuvwxyz";
        alert("Lowercase characters added!");
        break;
      }
    } else  {
        alert("Please input 'y' or 'n'. Try Again!");
    }
  }

//prompts user to input if uppercase should be included
while (true) {
  choice2 = prompt("Would you like to include uppercase letters?   (  y / n  )");
    if (choice2 === "y" || choice2 === "Y") {
      if(window.confirm("Press 'Ok' to confirm! otherwise press 'Cancel' to NOT add uppercase")){
        charUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        alert("Uppercase characters added!");
        break;
      } else {
        charUppercase = "";
        alert("Uppercase will will NOT be added!");
        break;
      }
    } else if (choice2 === "n" || choice2 === "N") {
      if(window.confirm("Press 'Ok' to confirm! otherwise press 'Cancel' to add uppercase")){
        charUppercase = "";
        alert("Uppercase characters will NOT be added!");
        break;
      } else {
        charUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        alert("Uppercase characters added!");
        break;
      }
    } else  {
      alert("Please input 'y' or 'n'. Try Again!");
    }
  }

//prompts user to input if numbers should be included
while (true) {
   choice3 = prompt("Would you like to include numbers?   (  y / n  )");
    if (choice3 === "y" || choice3 === "Y") {
      if(window.confirm("Press 'Ok' to confirm! otherwise press 'Cancel' to NOT add numbers")){
        charNumbers = "0123456789";
        alert("Numbers added!");
        break;
      } else {
        charNumbers = "";
        alert("Numbers will NOT be added!");
        break;
      }
    } else if (choice3 === "n" || choice3 === "N") {
      if(window.confirm("Press 'Ok' to confirm! otherwise press 'Cancel' to add numbers")){
        charNumbers = "";
        alert("Numbers will NOT be added!");
        break;
      } else {
        charNumbers = "0123456789";
        alert("Numbers will be added!");
        break;
      }
    } else {
        alert("Please input 'y' or 'n'. Try Again!");
    }
  }

//prompts user to input if special characters should be included
while (true) {
  choice4 = prompt("Would you like to include special characters?   (  y / n  )");
    if (choice4 === "y" || choice4 === "Y") {
      if(window.confirm("Press 'Ok' to confirm! otherwise press 'Cancel' to NOT add special characters")){
        charSpecialCharacters = "'!#$%&()*+,-./:;<=>?@[]^_`{|}~'";
        alert("Special Characters added!");
        break;
      } else {
        charSpecialCharacters = "";
        alert("Special Characters will NOT be added!");
        break;
      }
    } else if (choice4 === "n" || choice4 === "N") {
      if(window.confirm("Press 'Ok' to confirm! otherwise press 'Cancel' to add special characters")){
        charSpecialCharacters = "";
        alert("Special Characters will NOT be Added!");
        break;
      } else {
        charSpecialCharacters = "'!#$%&()*+,-./:;<=>?@[]^_`{|}~'";
        alert("Special Characters added!");
        break;
      }
    } else { 
      alert("Please input 'y' or 'n'. Try Again!");
    }
  }

  //prompts user back to the first question if user input "n" in all criteria
    var max_count = 10;
    if(charLowercase + charUppercase + charNumbers + charSpecialCharacters === "") {
      alert("Must include at least 1 criteria. You will be re-prompted to the first question.");
      if(--max_count > 0)
      generatePassword();
    }

  // variable that includes all the lowercase, uppercase, numbers and special characters
    var userChoiceCharacter =''.concat (charLowercase, charUppercase, charNumbers, charSpecialCharacters);

  //This section chooses random characters that was chosen by the user and dispplay to the website
    var generatedPass = "";

    for (var i = 0; i < passLength; i++) {
      var randomPin = Math.floor(Math.random() * userChoiceCharacter.length);
      generatedPass += userChoiceCharacter.substring(randomPin, randomPin+1);
    }
  // returns the value
  return generatedPass;
}
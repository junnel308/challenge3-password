
var generateBtn = document.querySelector("#generate");

var charLowercase = "abcdefghijklmnopqrstuvwxyz";
var charUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNumbers = "0123456789";
var charSpecialCharacters = "'!#$%&()*+,-./:;<=>?@[]^_`{|}~'";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  let passLength =  prompt("How many characters would you like to include? (Minimum of 8 character and Maximum of 128)");
  if(passLength >= 8 && passLength <= 128) {
    if(window.confirm("Is the character length" + " " + passLength + " " + "ok?")) {
        alert("Confirmed!");
      } else {
        alert("Choose a different number! (Number of characters must be minimum of 8 and no more than 128 maximum)");
      } 
    } else {
        alert("Number of characters must be minimum of 8 and no more than 128 maximum.");
    }
  

  let choice1 = prompt("Would you like to include lowercase letters?");
    if (choice1 === "yes") {
      if(window.confirm("Press ok to confirm! otherwise press cancel")){
        charLowercase = "abcdefghijklmnopqrstuvwxyz";
        alert("Added!");
      } else {
        charLowercase = "";
        alert("Not Added!");
      }
    } else if (choice1 === "no") {
      if(window.confirm("Press ok to confirm! otherwise press cancel")){
        charLowercase = "";
        alert("Not Added!");
      } else {
        charLowercase = "abcdefghijklmnopqrstuvwxyz";
        alert("Added!");
      }
    } else  {
        alert("Please input 'yes' or 'no'. Try Again!");
    }

  let choice2 = prompt("Would you like to include uppercase letters?");
    if (choice2 === "yes") {
      if(window.confirm("Press ok to confirm! otherwise press cancel")){
      charUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      alert("Added!");
      } else {
        charUppercase = "";
        alert("Not Added!");
      }
    } else if (choice2 === "no") {
      if(window.confirm("Press ok to confirm! otherwise press cancel")){
        charUppercase = "";
      alert("Not Added!");
      } else {
        charUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        alert("Added!");
      }
    } else  {
      alert("Please input 'yes' or 'no'. Try Again!");
    }


   let choice3 = prompt("Would you like to include numbers?");
    if (choice3 === "yes") {
      if(window.confirm("Press ok to confirm! otherwise press cancel")){
        charNumbers = "0123456789";
        alert("Added!");
      } else {
        charNumbers = "";
        alert("Not Added!");
      }
    } else if (choice3 === "no") {
      if(window.confirm("Press ok to confirm! otherwise press cancel")){
        charNumbers = "";
        alert("Not Added!");
      } else {
        charNumbers = "0123456789";
        alert("Added!");
      }
    } else {
        alert("Please input 'yes' or 'no'. Try Again!");
    }


  let choice4 = prompt("Would you like to include special characters?");
    if (choice4 === "yes") {
      if(window.confirm("Press ok to confirm! otherwise press cancel")){
        charSpecialCharacters = "'!#$%&()*+,-./:;<=>?@[]^_`{|}~'";
        alert("Added!");
      } else {
        charSpecialCharacters = "";
        alert("Not Added!");
      }
    } else if (choice4 === "no") {
      if(window.confirm("Press ok to confirm! otherwise press cancel")){
        charSpecialCharacters = "";
        alert("Not Added!");
      } else {
        charSpecialCharacters = "'!#$%&()*+,-./:;<=>?@[]^_`{|}~'";
        alert("Added!");
      }
    } else {
      alert("Please input 'yes' or 'no'. Try Again!");
    }

    var userChoiceCharacter =''.concat (charLowercase, charUppercase, charNumbers, charSpecialCharacters);

    var generatedPass = "";

    for (var i = 0; i < passLength; i++) {
      var randomPin = Math.floor(Math.random() * userChoiceCharacter.length);
      generatedPass += userChoiceCharacter.substring(randomPin, randomPin+1);
    }

  return generatedPass;
}
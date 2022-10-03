
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
  let charLength = prompt("How many characters would you like to include? (Minimum of 8 character and Maximum of 128)")

  let choice1 = prompt("Would you like to include lowercase letters?");

    if (choice1 === "yes") {
      if(window.confirm("Press ok to confirm! otherwise press cancel")){
      alert("Added!");
      } else {
        alert("Not Added!");
      }
    } else if (choice1 === "no") {
      if(window.confirm("Press ok to confirm! otherwise press cancel")){
      alert("Not Added!");
      } else {
        alert("Added!");
      }
    } else  {
      alert("Please input 'yes' or 'no'. Try Again!");
    }

  let choice2 = prompt("Would you like to include uppercase letters?");

    if (choice2 === "yes") {
      if(window.confirm("Press ok to confirm! otherwise press cancel")){
      alert("Added!");
      } else {
        alert("Not Added!");
      }
    } else if (choice2 === "no") {
      if(window.confirm("Press ok to confirm! otherwise press cancel")){
      alert("Not Added!");
      } else {
        alert("Added!");
      }
    } else  {
      alert("Please input 'yes' or 'no'. Try Again!");
    }

   let choice3 = prompt("Would you like to include numbers?");

    if (choice3 === "yes") {
      if(window.confirm("Press ok to confirm! otherwise press cancel")){
      alert("Added!");
      } else {
        alert("Not Added!");
      }
    } else if (choice3 === "no") {
      if(window.confirm("Press ok to confirm! otherwise press cancel")){
      alert("Not Added!");
      } else {
        alert("Added!");
      }
    } else {
      alert("Please input 'yes' or 'no'. Try Again!");
    }

  let choice4 = prompt("Would you like to include special characters?");

    if (choice4 === "yes") {
      if(window.confirm("Press ok to confirm! otherwise press cancel")){
      alert("Added!");
      } else {
        alert("Not Added!");
      }
    } else if (choice4 === "no") {
      if(window.confirm("Press ok to confirm! otherwise press cancel")){
      alert("Not Added!");
      } else {
        alert("Added!");
      }
    } else {
      alert("Please input 'yes' or 'no'. Try Again!");
    }

    var includeLowercase = choice1.charLowercase;
    var includeUppercase = choice2.charUppercase;
    var includeNumbers = choice3.charNumbers;
    var includeSpecialCharacters = choice4.charSpecialCharacters;

    

}
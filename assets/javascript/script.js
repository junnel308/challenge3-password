
var generateBtn = document.querySelector("#generate");
var optionSelect = document.querySelector("#includeLowercase");


// Write password to the #password input
/*
function writePassword() {
  var password = document.generatePassword("password")
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/


generateBtn.addEventListener("click", function(event) {
  document.getElementById('prompt1').classList.toggle ('active');
});


optionSelect.addEventListener("click", function(event) {
  document.getElementById('prompt2').classList.toggle ('active');
});

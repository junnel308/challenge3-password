
var generateBtn = document.querySelector("#generate");
var includeCharacters = document.querySelector("#includeCharacters");
var includeLowercase = document.querySelector("#includeLowercase");
var includeUppercase = document.querySelector("#includeUppercase");
var includeNumbers = document.querySelector("#includeNumbers");
var includeSpecialCharacters = document.querySelector("#includeSpecialCharacters");
var writePassword = document.querySelector("#password");
var choiceSelection = document.querySelector("#choice-selection");

includeLowercase = "abcdefghijklmnopqrstuvwxyz";
includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
includeNumbers = "0123456789";
includeSpecialCharacters = "!@#$%^&*()+-/<>.,;:}{][";


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

generateBtn.addEventListener("click", function(event){
  document.getElementById('footer-prompt').classList.toggle('active');
});

choiceSelection.addEventListener('submit', function(event) {
  var includeCharacters= includeCharacters.value;
  var includeLowercase = includeLowercase.checked;
  var includeUppercase = includeUppercase.checked;
  var includeNumbers = includeNumbers.checked;
  var includeSpecialCharacters = includeSpecialCharacters.checked;
  var password = document.generatePassword(includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters, includeCharacters);
  writePassword.value = password
})

function generatePassword(includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters, includeCharacters) {
  var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-+/=_[]{}|;:"
  if(includeLowercase) char = char.includeLowercase
  if(includeUppercase) char = char.includeUppercase
  if(includeNumbers) char = char.includeNumbers
  if(includeSpecialCharacters) char = char.includeSpecialCharacters

  var passwordText = []
  for (var i = 0; i < characterLength; i++) {
    var charRandom = char[Math.floor(Math.random() * characterLength)]
    passwordText.push(String.fromCharCode(char))
  }
  
}

var generateBtn = document.querySelector("#generate");

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
  event.preventDefault;
  document.getElementById('prompt1').classList.toggle ('active');
});

function changedata(parameter) {
  if(parameter == 1) {
    document.getElementById('prompt2').classList.opacity('0');

  }
}

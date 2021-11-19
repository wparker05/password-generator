// Assignment Code
var generateBtn = document.querySelector("#generate");


var abcLower = ["a","b","c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var abcUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = [0,1,2,3,4,5,6,7,8,9];
var special = ["!","#","$","%","&","*","@","^","~","?"];


var generatePassword = function(){
  var passLen = prompt("How many letter could you like your password to be?");

  if (passLen < 8) {
      alert("Password has be long than 8 characters?");
  } else if (passLen > 128) {
      alert("Password has to be less than 132 characters"); 
  } 
   
   if (passLen >= 8 && passLen <= 128) {
      var lower =confirm("Would you like your password to contain lower case letters?");
      var upper =confirm("Would you like your password to contain upper case letters?");
      var num = confirm("Would you like your password to contain numbers?");
      var special =confirm("Would you like your password to contain special characters?");
   }

   console.log(lower +" "+upper+" "+num+" "+special);
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

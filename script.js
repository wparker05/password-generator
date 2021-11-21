// Assignment Code
var generateBtn = document.querySelector("#generate");




var generatePassword = function(){
  //Variables
  var abcLower = ["a","b","c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var abcUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var nums = [0,1,2,3,4,5,6,7,8,9];
  var special = ["!","#","$","%","&","*","@","^","~","?"];
  var passLen = "";
  var chosenReq = [];
  var randomPick = [];
  var results = "";

  //Customer picking requirements
  var req = function()
  {
    var lower =confirm("Would you like your password to contain lower case letters?");
      if (lower) chosenReq.push(abcLower); 
    var upper =confirm("Would you like your password to contain upper case letters?");
      if(upper) chosenReq.push(abcUpper);
    var num = confirm("Would you like your password to contain numbers?");
      if(num) chosenReq.push(nums);
    var specialChar =confirm("Would you like your password to contain special characters?");
      if(specialChar) chosenReq.push(special);  

      //Make sure user select at least 1 requirement
      if (chosenReq.length < 1){
              alert("You must choose atleast 1 requirement for your password.");
              results = "Please try again!";
              return results;
      } else {
            var passLenStr= prompt("How many letter could you like your password to be?");
            passLen= parseInt(passLenStr);
            
          if (passLen < 8) {
              alert("Password has be long than 8 characters.");
              results = "Please try again!";
              return results;
          } else if (passLen > 128) {
              alert("Password has to be less than 128 characters."); 
              results = "Please try again!";
              return results;
          } else if (isNaN(passLen)){
              alert("Password must be between 8 and 128 characters long.");
              results = "Please try again!";
              return results;
          } else {
              function createPassword() {
                      results="";
                for (var x = 0; x < passLen; x++ )
                  {
                    var numOps = Math.floor(Math.random() * chosenReq.length); 
                    var newArr = randomPick.concat(chosenReq[numOps]);
                    var numPicked = Math.floor(Math.random() * newArr.length);
                    results += newArr[numPicked];   
                  }
                }
                createPassword();
                    
                if(chosenReq.includes(abcLower)){
                   if (!(/[a-z]+/).test(results)) createPassword(); 
                } else if (chosenReq.includes(abcUpper)){
                  if(!(/[A-Z]+/).test(results)) createPassword();  
                } else if (chosenReq.includes(abcUpper)){
                  if(!(/[0-9]+/).test(results)) createPassword(); 
                } else if (chosenReq.includes(abcLower)) {
                  if(!(/[!|#|$|%|&|*|@|^|~|?]/).test(results)) createPassword();  
                 }
          }
      }
  }

  req();

              
 
   return results;
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
var lowerCaseLetters="abcdefghijklmnopqrstuvwxyz"
var upperCaseLetters="ABCDEFGHIJKLMOPQRSTUVWXYZ"
var numbers="0123456789"
var symbols="!@#$%^&*()"
var possiblePassword=[]
var password=[]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getrandomarray(arr){
  var randomindex=Math.floor(Math.random()*arr.length)
  var randomelement=arr[randomindex]
  return randomelement
}

function generatePassword(){
  var passwordLength=parseInt(prompt("How Long Do You Want Your Password"))
  if(Number.isNaN(passwordLength)||passwordLength<8||passwordLength>128){
alert("Must be a number value greater than 8 and greater than 128")
  }

  var wantlowerCaseLetters=confirm("Would you like lowercase letters")
  if(wantlowerCaseLetters===true){
possiblePassword+=lowerCaseLetters
}

var wantupperCaseLetters=confirm("Would you like uppercase letters")
if(wantupperCaseLetters===true){
  possiblePassword+=upperCaseLetters
}

var wantnumbers=confirm("Would you like numbers")
if(wantnumbers===true){
  possiblePassword+=numbers
}

var wantsymbols=confirm("Would you like symbols")
if(wantsymbols===true){
  possiblePassword+=symbols
}
while(!wantlowerCaseLetters&&!wantupperCaseLetters&&!wantnumbers&&!wantsymbols){
  alert("Must select one option")
  return null
}
for(var i=0;i<passwordLength;i++){
  var newPassword=getrandomarray(possiblePassword)
password.push(newPassword)
}
return password.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

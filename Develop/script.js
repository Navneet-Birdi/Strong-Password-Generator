
// Assignment Code
const generateBtn = document.querySelector("#generate");
console.log(generateBtn);
function generatePassword(){
// series of prompts for password

// first password length
const passwordLength = prompt("Select a password length between 8 and 128");

//if password length correct
if (passwordLength <=8 && passwordLength <= 128){
  console.log(passwordLength);
}else{
  console.log("Please choose password length between 8 and 128 \n Thank You");
}

//character types to include in password
// 1. creating arrays for character types
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const specialCharacters = ['@','%','+','\\',"'",'!','#','$','^','?',':',',', ')', '(', '}', '{', ']', '[', '~','-', '_','.'];

const selectedCharacters = []; //empty array to print selected characters as a password

//character types 
const lowerC = confirm("Do you want to use lower case characters?");
const upperC = confirm("Do you want to use upper case characters?");
const numberC = confirm("Do you want to use numeric characters?");
const specialC = confirm("Do yu want to use special characters?");
 
// check if prompts have been selected for password

if  (lowerC == true||
    upperC == true||
    numberC == true||
    specialC == true)

    //for lowercase letters
    {
  if (lowerC == true){
selectedCharacters += lowercaseCharacters;
  }

  //for upper case
  {
    if (upperC == true){
      selectedCharacters += uppercaseCharacters;
        }
  }

 //for numbers
 {
  if (numberC == true){
    selectedCharacters += numericCharacters;
      }
}

//for special characters
{
  if (specialC == true){
    selectedCharacters += specialCharacters;
      }
}

//now as each prompt answered, to validate input
console.log(selectedCharacters);

//if not anything selected
else{
  alert("Please select at least one type");
}


generatePassword(passwordLength);
}





}

















// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








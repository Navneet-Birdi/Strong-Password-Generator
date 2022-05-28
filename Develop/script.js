
// Assignment Code
const generateBtn = document.querySelector("#generate");
//console.log(generateBtn);
function askPasswordLength(){
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

}
//asking questions
function askCriteria(){
//character types 
const lowerC = confirm("Do you want to use lower case characters?");
const upperC = confirm("Do you want to use upper case characters?");
const numberC = confirm("Do you want to use numeric characters?");
const specialC = confirm("Do yu want to use special characters?");
 
// check if prompts have been selected for password

if  (lowerC == true|| upperC == true|| numberC == true|| specialC == true){
  return{
    lowerC,upperC,numberC,specialC,
  };
}

// if user didn't do that, re-ask the criteria questions
return askCriteria();

} 

//when user click on button

generateBtn.addEventListener('click',function(event){
 
  const passwordLength = askPasswordLength();
  const criteria = askCriteria();


  //generating a password and building a character set

  let selectedCharacters = []; //empty array to print selected characters as a password

  if (lowerC == true){
    selectedCharacters = selectedCharacters + lowercaseCharacters;
      }

 if (upperC == true){
selectedCharacters = selectedCharacters + uppercaseCharacters;
          }

 if (numberC == true){
    selectedCharacters = selectedCharacters + numericCharacters;
          }

  if (specialC == true){
    selectedCharacters = selectedCharacters + specialCharacters;
          }
            


// password 

let password = "";
for  (let index = 0; index < passwordLength; index++){
  const randomCharacter = selectedCharacters[ Math.floor(Math.random() * selectedCharacters.length) ]
  password += randomCharacter;
}
 document.getElementById('password').value = password;

});







// Assignment Code
const generateBtn = document.querySelector("#generate");


//character types to include in password
// 1. creating arrays for character types
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const specialCharacters = ['@','%','+','\\',"'",'!','#','$','^','?',':',',', ')', '(', '}', '{', ']', '[', '~','-', '_','.'];


//console.log(generateBtn);
function askPasswordLength(){


// series of prompts for password
// first password length
const passwordLength = Number(prompt("Select a password length between 8 and 128"));


//can only accept numeric value

//if password length correct
if (passwordLength <=8 || passwordLength >= 128 || isNaN(passwordLength)){ 
  console.log(passwordLength);
  askPasswordLength();
}
return passwordLength;
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
else{
  alert("Please select at least one character type");
}

// if user didn't do that, re-ask the criteria questions
return askCriteria();
} 


//when user click on button
generateBtn.addEventListener('click',function(event){
 
  const passwordLength = askPasswordLength();
  const criteria = askCriteria();


//generating a password and building a character set
 let selectedCharacters = "";

  if (criteria.lowerC === true){
    selectedCharacters.push(...lowercaseCharacters);
      }

 if (criteria.upperC === true){
    selectedCharacters.push(...uppercaseCharacters);
          }

 if (criteria.numberC === true){
    selectedCharacters.push(...numericCharacters);
          }

  if (criteria.specialC === true){
    selectedCharacters .push(...specialCharacters);
          }
            

// password 

let password = "";
for  (let index = 0; index < passwordLength; index++){
  const randomCharacter = selectedCharacters[ Math.floor(Math.random() * selectedCharacters.length) ]
  console.log(randomCharacter);
  password += randomCharacter;
}
 document.getElementById('password').value = password;

});






# 03 JavaScript: Password Generator

## User Story


AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security


## Acceptance Criteria


GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


## How

So for Password Generator-
First of all, created arrays for all character type.
Then created series of prompts for user to select what character type they would like to choose for password.
For that, I applied condition to select the password length between 8 and 128.
And if user choose say length 5 for password it will then not allow because there is a condition and if user choose any length between 8 and 128 then it will ask continue further questions.
So user can choose any character type which may be lower case letters, upper case letters, numeric characers, special symbols or all of them.
but if user choose password length but do not choose any character type then it will prompt to choose "please select at least one type".
and when password is generated it will displayed written on Screen.

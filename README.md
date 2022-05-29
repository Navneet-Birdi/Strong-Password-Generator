
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

![pwd1](https://user-images.githubusercontent.com/103732777/170854649-82b30bd7-7e6c-4b46-8b28-b8f84d8a63c5.png)
![pwd2](https://user-images.githubusercontent.com/103732777/170854659-c20edefb-51d5-4038-80f1-f34966b94cfe.png)
![pwd3](https://user-images.githubusercontent.com/103732777/170854661-f8b745d0-b279-4da7-abea-4b8d1b03b102.png)
![pwd4](https://user-images.githubusercontent.com/103732777/170854662-0ff94648-2ea9-4cd0-ba26-6a4bf992bb4a.png)
![pwd5](https://user-images.githubusercontent.com/103732777/170854663-50f55d85-c509-4bca-a45e-692c91539c8e.png)
![pwd6](https://user-images.githubusercontent.com/103732777/170854665-3f19bcbe-616f-42e5-a079-f5133d3a7976.png)

#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


//Printing a Welcome Message
console.log(chalk.bold.rgb(204, 204, 204)(`\n  \t\t <<<================================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<=========>>>    ${chalk.magentaBright.bold('  Welcome To \"SAM\" - CLI Number Guessing Game')}         <<<=========>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<================================================>>>\n`));

// 1) Computer will generate a random number

// 2) User input for guessing number

// 3) Compare user input with computer generated number and show result

// Function to run the number guessing game
 async function main() {
     let runContinue = true;
   
     while(runContinue){
  

const randomNumber = Math.floor(Math.random() * 10 + 1);

console.log(chalk.blackBright("Welcome to number Guessing game"));


const answers = await inquirer.prompt(
    [
        {
            name: "userGuessedNumber",
            type: "number",
            message: chalk.blueBright("Please guess a number between 1-10:"),
            validate: (input) =>{
                if (input < 1 || input > 10){
                  return chalk.red("Please enter a number between 1 and 10.")
                }
                return true;
              }, 
        },
    ]
);

if(answers.userGuessedNumber === randomNumber){
console.log(chalk.green("Congratulations! you guess right number."));

}
else{
console.log(chalk.redBright("You guessed wrong number"));

}

const {confirm} =await inquirer.prompt({
    type: "confirm",
    name: "confirm",
    message: chalk.magentaBright("Do you want to play again?"),
    default: false,
  });
  
   runContinue = confirm;
    }
  console.log(chalk.yellow("\n\t******************************************************\t"));

  console.log(chalk.greenBright("\n\tThank you for using the SAM Number Guessing Game!\t"));
  
  }
main()




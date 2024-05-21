#!/usr/bin/env node


import inquirer from "inquirer";

let todos = []; //This is an empty array , here we will store our todos using .push
let condition = true; // we give the default value as true

while (condition) {
  //here we make a loop , loop is something that repeat it self until we stop it.means if the condition is true , it will repeat but if the condition is false it will come out

  let todoQuestions = await inquirer.prompt([
      {
          name: "firstQuestion",
          message: "What would you like to add in your todos?",
          type: "input"
        },
        {
            name: "secondQuestion",
            message: "Would you like to add more in your todos?",
            type: "confirm", //confirm means answer in yes or no
            default: "true" //true means if we not answer , it will concider as yes.
        }
    ]);
   

  todos.push(todoQuestions.firstQuestion); //push is to add something in our array
  console.log(todos);
  condition = todoQuestions.secondQuestion;
}
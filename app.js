#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from "inquirer";
let todos = ["EATING", "DRINKING", "SLEEPING"]; //This is an empty array , here we will store our todos using .push
let question = chalk.bgBlueBright; //storing chalks for our saholiat
let Choices = chalk.greenBright; //storing chalks for our saholiat
let func = async (todos) => {
    let condition = true;
    while (condition) {
        let userInput = await inquirer.prompt({
            name: "select",
            type: "list",
            message: question("WHAT DO YOU WANT TO DO?"),
            choices: [Choices("VIEW YOUR TODO LIST"), Choices("ADD IN YOUR TODO LIST"), Choices("UPDATE YOUR TODO LIST"), Choices("DELETE FROM YOUR TODO LIST"), Choices("EXIT")]
        });
        if (userInput.select == Choices("VIEW YOUR TODO LIST")) {
            console.log(todos);
        }
        if (userInput.select == Choices("ADD IN YOUR TODO LIST")) {
            let adding = await inquirer.prompt({
                name: "addInTodo",
                type: "input",
                message: question("WHAT WOULD YOU LIKE TO ADD IN YOUR TODO LIST?")
            });
            todos.push(adding.addInTodo);
            console.log(todos);
        }
        if (userInput.select == Choices("UPDATE YOUR TODO LIST")) {
            let updating = await inquirer.prompt({
                name: "update",
                type: "list",
                message: question("WHICH TODO, YOU WANT TO UPDATE?"),
                choices: todos.map(val => val) //using map method to show the elements or values stored in our todos array
            });
            let adding = await inquirer.prompt({
                name: "addInTodo",
                type: "input",
                message: question(`WHAT DO YOU WANT TO UPDATE IN ${updating.update}`)
            });
            let newTodo = todos.filter(val => val !== updating.update);
            todos = [...newTodo, adding.addInTodo];
            console.log(todos);
        }
        if (userInput.select == Choices("DELETE FROM YOUR TODO LIST")) {
            let deleting = await inquirer.prompt({
                name: "delete",
                type: "list",
                message: question("WHICH TODO, YOU WANT TO DELETE?"),
                choices: todos.map(val => val) //using map method to show the elements or values stored in our todos array
            });
            let newTodo = todos.filter(val => val !== deleting.delete);
            todos = newTodo;
            console.log(todos);
        }
        if (userInput.select == Choices("EXIT")) {
            condition = false;
        }
    }
};
func(todos);

#! /usr/bin/env node
//this is called shabang
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number", name: "First_Number", message: "Enter first number"
    },
    { type: "number", name: "Second_Number", message: "Enter second number" },
    { type: "list", name: "operator", message: "Select one arithmatic operator", choices: ["+", "-", "*", "/"] }
]);
if (answer.operator === "+") {
    console.log("Your value is", answer.First_Number + answer.Second_Number);
}
else if (answer.operator === "-") {
    console.log("Your value is", answer.First_Number - answer.Second_Number);
}
else if (answer.operator === "*") {
    console.log("Your value is", answer.First_Number * answer.Second_Number);
}
else if (answer.operator === "/") {
    console.log("Your value is", answer.First_Number / answer.Second_Number);
}
else {
    console.log("Please select valid operator.");
} //change in package.json "bin": "index.js",
//npm login on command line
//npm publish
//npx package name
//.gitignore enter name node_modules
//git init
//git add .
//git commit -m ""
//git branch -M main
//git remote
//
//change and push
//git add .
//git commit -m "change"
//git push origin main
//aws codewhisperer

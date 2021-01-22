//require classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//npm 
const inquirer = require("inquirer");
const jest = require("jest");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = []
const differentEmployees = ["Manager", "Engineer", "Intern","I'm done adding employees"]

/*
 Write code to use inquirer to gather information about the development team members,
 and to create objects for each team member (using the correct classes as blueprints!)
*/
function generalQuestions() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is your name",
        },
        {
            name: "id",
            type: "input",
            message: "What is your id number?",
        },
        {
            name: "email",
            type: "input",
            message: "what is your email?",
            
        },
        {
            name: "employee_choices",
            type: "checkbox",
            message: "What type of employee do you want to add?",
            choices: differentEmployees,
        },
    ])
};
//if user chose differentEmployee[0](Manager)ask for officeNumber and comeback to last question
//if user chose differentEmployee[1](Engineer)ask for github acc and comeback to last question
//if user chose differentEmployee[2](Intern)ask for school and comeback to last question
//if user chose differentEmployee[3](Im done adding)close application and create team.html file
generalQuestions();


fs.writeFile(outputPath, render(employees), () => console.log('Your team.html file has been added to "output".'));


const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [];

function addIntern(){
//Add intern user prompts
console.log("Please enter information for the Intern:");
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Name:",
        },

        {
            type: "input",
            name: "id",
            message: "Intern ID:",
        },

        {
            type: "input",
            name: "email",
            message: "Email address:",
        },

        {
            type: "input",
            name: "school",
            message: "School:",
        },

    ])

    .then((answers) =>{
        const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school,
        );
        team.push(manager);
        promptUser();
    });

}

// add engineer user prompts
function addEngineer() {
    console.log("Please enter information for the Engineer:");
    inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "Name:",
        },

        {
          type: "input",
          name: "id",
          message: "Engineer ID:",

        },

        {
          type: "input",
          name: "email",
          message: "Email address:",
          validate: validateEmail,
        },

        {
          type: "input",
          name: "github",
          message: "GitHub Username:",
        },

    ])
    .then((answers) => {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        
        team.push(engineer);
        promptUser();
    });
}

// add manager user prompts
function addManager() {
    console.log("Please enter information for the Team Manager:");
    inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "Name:",
        },

        {
          type: "input",
          name: "id",
          message: "Employee ID:",
        },

        {
          type: "input",
          name: "email",
          message: "Email address:",
        },

        {
          type: "input",
          name: "officeNumber",
          message: "Office number:",
        },

    ])
    .then((answers) => {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        team.push(manager);
        promptUser();
    });
}



/* let team = [];

startProgram()
async function startProgram(){

    new Engineer("Lily", 1, "test@test.com");

    let htmlDoc = render(team);

    await fs.writeFile(outputPath, htmlDoc);
}
 */
//generates html document based off of the team array
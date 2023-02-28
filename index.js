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

// add manager user prompts
function addManager() {
    console.log("Please enter information for the Team Manager:");
    inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "Name:",
          validate: validateString,
        },

        {
          type: "input",
          name: "id",
          message: "Employee ID:",
          validate: validateId,
        },

        {
          type: "input",
          name: "email",
          message: "Email address:",
          validate: validateEmail,
        },

        {
          type: "input",
          name: "officeNumber",
          message: "Office number:",
          validate: validateId,
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
    })
}

function addIntern(){
//Add intern user prompts
console.log("Please enter information for the Intern:");
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Name:",
            validate: validateString,
        },

        {
            type: "input",
            name: "id",
            message: "Intern ID:",
            validate: validateId,
        },

        {
            type: "input",
            name: "email",
            message: "Email address:",
            validate: validateEmail,
        },

        {
            type: "input",
            name: "school",
            message: "School:",
            validate: validateString,
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
          validate: validateString,
        },

        {
          type: "input",
          name: "id",
          message: "Engineer ID:",
          validate: validateId,

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
          validate: validateString,
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

// function to choose who to add next
function promptUser() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: "Choose one of the following:",
          choices: [
            "Add an Engineer",
            "Add an Intern",
            "Finish building the team",
          ],
        },
      ])

      .then((answers) => {
        switch (answers.action) {
          case "Add an Engineer":
            addEngineer();
            break;
          case "Add an Intern":
            addIntern();
            break;
  
          case "Finish building the team":
            const html = renderTeam(team);
            const outputPath = path.join(OUTPUT_DIR, "team.html");
            fs.writeFile(outputPath, html, (err) => {
              if (err) throw err;
              console.log(`Team profile page generated at:${outputPath}`);
            });
            break;
          default:
            break;
        }
      });
  }

  // Call addManager to start the process
addManager();

// validation
function validateEmail(value) {
  let pass = value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  if (pass) {
    return true;
  }

  return "Please enter a valid email address.";
}

function validateString(value) {
  if (!value || typeof value !== "string") {
    return "This cannot remain empty - please input required value.";
  }
  return true;
}

function validateId(value) {
  // inquirer prompt answers are always returned as strings
  const numValue = Number(value);
  // check isNan
  if (isNaN(numValue) || numValue < 1000 || value.length < 4) {
    return "Please enter the 4 digit number: you cannot leave this blank:";
  }
  return true;
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
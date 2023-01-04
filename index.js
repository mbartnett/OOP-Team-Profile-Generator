// node.js `requires`

const inquirer = require('inquirer');
const fs = require('fs');

// HTML elements

const managerCard = require('./src/manager-card');
const engineerCard = require('./src/engineer-card');
const internCard = require('./src/intern-card');
const body = require('./src/body');

// employee libraries 

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

// employee-type questions

const managerQuestion = [
    {
        type: "input",
        name: "Name",
        message: "What is the manager's name?",
    },
    {
        type: "input",
        name: "ID",
        message: "What is their ID number?",
    },
    {
        type: "input",
        name: "Email",
        message: "What is their email address?",
    },
    {
        type: "input",
        name: "OfficeNumber",
        message: "What is their office number?",
    },
];

const engineerQuestion = [
    {
        type: "input",
        name: "Name",
        message: "What is the engineer's name?",
    },
    {
        type: "input",
        name: "ID",
        message: "What is their ID number?",
    },
    {
        type: "input",
        name: "Email",
        message: "What is their email address?",
    },
    {
        type: "github",
        name: "Github",
        message: "What is their Github username?",
    },
];

const internQuestion = [
    {
        type: "input",
        name: "Name",
        message: "What is the intern's name?",
    },
    {
        type: "input",
        name: "ID",
        message: "What is their ID number?",
    },
    {
        type: "input",
        name: "Email",
        message: "What is their email address?",
    },
    {
        type: "school",
        name: "School",
        message: "Where did they go to school?",
    },
];

function addEngineer() {
    inquirer.prompt(engineerQuestion).then(response => {
        const engineer = new Engineer(response.Name, response.ID, response.Email, response.Github)
        team.push(engineer)
        addTeamMember()
    })
}

function addIntern() {
    inquirer.prompt(internQuestion).then(response => {
        const intern = new Intern(response.Name, response.ID, response.Email, response.School)
        team.push(intern)
        addTeamMember()
    })
}

function buildTeam() {
    console.log(team)
    let cards = ''
    for(i=0; i<team.length; i++){
        if(team[i].getRole()==='Manager'){
            cards=cards+managerCard(team[i])
        }
        else if(team[i].getRole()==='Engineer'){
            cards=cards+engineerCard(team[i])
        }
        else if(team[i].getRole()==='Intern'){
            cards=cards+internCard(team[i])
        }
    }
    fs.writeFileSync('./dist/team.html', body(cards))
}

function addTeamMember() {
    inquirer.prompt([{
        type: "list",
        message: "Do you want to add an employee?",
        name: "Choices",
        choices: ["Engineer", "Intern", "Create your team"],
    }]).then(response => {
        if (response.Choices === "Engineer") {
            addEngineer()
        }
        else if (response.Choices === "Intern") {
            addIntern()
        }
        else {
            buildTeam()
        }
    })
}

function mainMenu() {
    inquirer.prompt(managerQuestion).then(response => {
        const manager = new Manager(response.Name, response.ID, response.Email, response.OfficeNumber)
        team.push(manager)
        addTeamMember()
    })
}

mainMenu()
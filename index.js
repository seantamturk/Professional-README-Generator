// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
// const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Project name?',
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'Enter project description',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Table of Contents',
            name: 'contents',
        },
        {
            type: 'input',
            message: 'Installation instructions',
            name: 'installationInstructions',
        },
        {
            type: 'input',
            message: 'Usage information',
            name: 'usageInformation',
        },
        {
            type: 'list',
            message: 'License',
            name: 'license',
            choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 3-Clause License', 'Mozilla Public License 2.0', 'The Unlicense', 'GNU Lesser General Public License v3.0', 'GNU Affero General Public License v3.0', 'Eclipse Public License 2.0', 'GNU General Public License v2.0']
        },
        {
            type: 'input',
            message: 'Contributing guidelines',
            name: 'contributingGuidelines',
        },
        {
            type: 'input',
            message: 'Test instructions',
            name: 'testInstructions',
        },
        {
            type: 'input',
            message: 'Github username',
            name: 'userName',
        },
        // Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    ])
    .then((response) => {
        console.log(response)
    })

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();

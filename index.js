// Packages
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require("./generateMarkdown.js")
//prompts
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
            choices: ['None', 'MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 3-Clause License', 'Mozilla Public License 2.0', 'The Unlicense', 'GNU Lesser General Public License v3.0', 'GNU Affero General Public License v3.0', 'Eclipse Public License 2.0', 'GNU General Public License v2.0']
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
        {
            type: 'input',
            message: 'Email',
            name: 'email',
        },
    ])
    .then((response) => {
        console.log(response)
        // for the purposes of this project, i have set the generated readme name to userReadme.md rather than readme.md since this project has its own readme. Change the writetofile name as preferred.
        writeToFile("userReadme.md", response)
    })

// // takes inputs and writes to file using markdown formatting
function writeToFile(writeReadme, userInput) {
    // throws if error
    fs.writeFile(writeReadme, generateMarkdown(userInput), (err) => {
        if (err) throw err
        console.log("Finished Writing")
    })
}

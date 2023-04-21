// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// make if statement to check what license we picked and return approipriate badge
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT License') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else if (license === 'Apache License 2.0') {
    badge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else if (license === 'GNU General Public License v3.0') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else if (license === 'BSD 3-Clause License') {
    badge = '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }
  else if (license === 'Mozilla Public License 2.0') {
    badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }
  else if (license === 'The Unlicense') {
    badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  }
  else if (license === 'GNU Lesser General Public License v3.0') {
    badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
  }
  else if (license === 'GNU Affero General Public License v3.0') {
    badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  }
  else if (license === 'Eclipse Public License 2.0') {
    badge = '[![License: Eclipse 2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)';
  }
  else if (license === 'None') {
    badge = '';
  }
  return badge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // const projectLink creates a working link that replaces spaces in the project name with dashes
  const projectNameDashed = `${data.projectName.replace(/\s+/g, '-')}`;
  return `# ${data.projectName}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Installation instructions
${data.installationInstructions}
## Usage information
${data.usageInformation}
## Contributing guidelines
${data.contributingGuidelines}
## Test instructions
${data.testInstructions}
## Questions
- [Repository](https://github.com/${data.userName}/${projectNameDashed})
- [Website](https://${data.userName}.github.io/${projectNameDashed}/)
- [Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;

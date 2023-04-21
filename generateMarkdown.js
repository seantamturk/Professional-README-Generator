// takes license chosen in inquirer and chooses appropriate badge
//note that the license is clickable in the readme. directs to license info
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

function renderLicenseSection(license) {
  let licenseText = '';

  // Add license information based on the chosen license
  switch (license) {
    case 'MIT License':
      licenseText = `This project is licensed under the MIT License. For more information about the license, see the [MIT License](https://opensource.org/licenses/MIT).`;
      break;
    case 'Apache License 2.0':
      licenseText = `This project is licensed under the Apache License 2.0. For more information about the license, see the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).`;
      break;
    case 'GNU General Public License v3.0':
      licenseText = `This project is licensed under the GNU General Public License v3.0. For more information about the license, see the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).`;
      break;
    case 'BSD 3-Clause License':
      licenseText = `This project is licensed under the BSD 3-Clause License. For more information about the license, see the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).`;
      break;
    case 'Mozilla Public License 2.0':
      licenseText = `This project is licensed under the Mozilla Public License 2.0. For more information about the license, see the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0).`;
      break;
    case 'The Unlicense':
      licenseText = `This project is licensed under the Unlicense. For more information about the license, see the [Unlicense](http://unlicense.org/).`;
      break;
    case 'GNU Lesser General Public License v3.0':
      licenseText = `This project is licensed under the GNU Lesser General Public License v3.0. For more information about the license, see the [GNU Lesser General Public License v3.0](https://www.gnu.org/licenses/lgpl-3.0.en.html).`;
      break;
    case 'GNU Affero General Public License v3.0':
      licenseText = `This project is licensed under the GNU Affero General Public License v3.0. For more information about the license, see the [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.en.html).`;
      break;
    case 'Eclipse Public License 2.0':
      licenseText = `This project is licensed under the Eclipse Public License 2.0. For more information about the license, see the [Eclipse Public License 2.0](https://opensource.org/licenses/EPL-2.0).`;
      break;
    case 'None':
      licenseText = 'This project is not licensed.';
      break;
    default:
      break;
  }

  return licenseText;
}


//Markdown generator
function generateMarkdown(data) {
  // const projectNameDashed replaces spaces in the project name with dashes so it can be plugged into the repo link
  const projectNameDashed = `${data.projectName.replace(/\s+/g, '-')}`;
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.projectName}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation instructions](#installation-instructions)
- [Usage information](#usage-information)
- [Contributing guidelines](#contributing-guidelines)
- [Test instructions](#test-instructions)
- [License](#license)
- [Questions](#questions)

## Installation instructions
${data.installationInstructions}

## Usage information
${data.usageInformation}

## Contributing guidelines
${data.contributingGuidelines}

## Test instructions
${data.testInstructions}

## License
${licenseSection}

## Questions
- [Github user ${data.userName}](https://github.com/${data.userName})
- [Repository](https://github.com/${data.userName}/${projectNameDashed})
- [Website](https://${data.userName}.github.io/${projectNameDashed}/)
- [Contact me through email here](mailto:${data.email})
`;
}

module.exports = generateMarkdown;

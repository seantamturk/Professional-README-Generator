// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // make if statement to check what license we picked and return approipriate badge
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

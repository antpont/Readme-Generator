// TODO: Create a function to generate markdown for README

function getLicense(license) {
  if (license === "MIT") {
    return `[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else {
    return `No License`
  }
return
}

function generateMarkdown(data) {
  return `# ${data.title}

# Description
${data.description}

# License
${getLicense(data.license)}




`;
}

module.exports = generateMarkdown;

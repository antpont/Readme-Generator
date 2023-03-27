const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "list",
        name: "license",
        message: "what license are you using?",
        choices: ["MIT", "Apache", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }
]).then(answer => {
    fs.writeFile("README.md", generateMarkdown(answer), function(err) {
        if (err) throw err;
        console.log("README.md file has been created!")
    })
})
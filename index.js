const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = ([
    {
        type: 'input',
        name: 'title',
        message: "What's your project's title?",
    },
    {
        type: "input",
        name: "description",
        message: "Briefly describe your project.",
    },
    {
        type: "input",
        name: "userStory",
        message: "Summarise the user story."
    },
    {
        type: "input",
        name: "installation",
        message: "How can users install your project?"
    },
    {
        type: "input",
        name: "screenshots",
        message: "Are you including project screenshots?"
    },
    {
        type: "input",
        name: "usage",
        message: "How can users use your project?"
    },
    {
        type: "input",
        name: "credits",
        message: "Any credits or acknowledgments to include?"
    },
    {
        type: "input",
        name: "deployment",
        message: "What's your deployed project GitHub Repository link?"
    },
    {
        type: "input",
        name: "contribute",
        message: "Steps for contributing?"
    },
    {
        type: "input",
        name: "contributions",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "starred",
        message: "How can users show their support through a starred project?"
    },


]);

// function to write README file
function writeToFile(fileName, data) {
    const readme = generateMarkdown(data);

    fs.writeFile(`./readme-sample-here/${fileName}`, readme, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success! Your sample-README.md has been generated!');
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        writeToFile('sample-README-3.md', data);
    })
    .catch((err) => {
        console.error(err);
    });
}

// function call to initialize program
init();

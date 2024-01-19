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

}

// function call to initialize program
init();

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
        validate: (answer) => {
            if (answer === "") {
                return console.log("Please, enter a valid title for your project!");
            }
            return true;
        }
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
    {
        type: "input",
        name: "tests",
        message: "How to test the project?"
    },
    {
        type: "input",
        name: "questions",
        message: "How can users reach you?"
    },
    {
        type: "input",
        name: "githubUser",
        message: "What's your GitHub username?"
    },
    {
        type: "list",
        name: "license",
        message: "What's the project license? Choose one.",
        choices: [
            'Apache-2.0',
            'GPL-3.0',
            'MIT',
            'BSD-2-Clause',
            'BSD-3-Clause',
            'BSL-1.0',
            'CC0-1.0',
            'EPL-2.0',
            'AGPL-3.0',
            'GPL-2.0',
            'LGPL-2.1',
            'MPL-2.0',
            'Unlicense'
        ]
    },
    {
        type: "checkbox",
        name: "badges",
        message: "Select any desired badges.",
        choices: [
            'edX',
            'Markdown',
            'HTML5',
            'CSS3',
            'JavaScript',
            'jQuery',
            'Node.js',
            'npm',
            'React.js',
            'React Native',
            'Bootstrap',
            'Windows 11',
            'Figma',
            'Slack',
            'Google Chrome',
            'Visual Studio Code',
            'Git',
            'GitHub',
            'Github Pages',
            'GitLab',
            'Netlify'
        ]
    },


]);

// function to write README file
function writeToFile(fileName, data) {
    const readme = generateMarkdown(data);

    // create a new dir if there isn't one
    fs.mkdir('./readme-sample-here', { recursive: true }, (err) => {
        if (err) {
            console.error(err);
        } else {
            fs.writeFile(`./readme-sample-here/${fileName}`, readme, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('Success! Your sample-README.md has been generated!');
                }
            });
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

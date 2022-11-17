// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
    },
    {
    name: "description",
    type: "input",
    message: "Please enter the description of your project: "
   }, 
   {
    name: "liveDemo",
    type: "input",
    message: "Please paste the url to your live demo: "
   },
   {
    name: "screenshot",
    type: "input",
    message: "Please paste the link to your screenshot: "
   },
   {
    name: "video",
    type: "input",
    message: "Please paste the link to your video (if applicable): "
   },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
    {
      fs.writeFile(fileName, generateMarkdown(data), function()
      {
        console.log("README file was generated")
      })
    }

// TODO: Create a function to initialize app
function init() 
    {
        inquirer.prompt(questions).then(function(answers){
            console.log (answers)
            writeToFile("README.md", answers)
        })
    }

// Function call to initialize app
init();

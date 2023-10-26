const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  run() {

    // TODO: Make an inquirer prompt to get text, textColor, shapeType, shapeColor data from user
    const questionArr = [
      {
        type: 'input ',
        name: 'text',
        default: 'Must not be more than 3 characters',
        message: 'Enter text for the logo',
      },
      {
        type: 'input',
        name: 'text-color',
        message: 'Enter a text color',
      },
      {
        type: 'list',
        name: 'shape',
        choices: ['circle, square, triangle'],
        message: 'Select a shape for the logo?',
      },
      {
        type: 'input',
        name: 'shape-color',
        message: 'Enter a shape color',
      },
    ];
    // TODO: Create a shape object based on inquirer data

    // TODO: Create a svg object and set text and textColor using user Data

    // TODO: Set svg shape with shape object created above

    // TODO: Write your svg file

  }
}

module.exports = CLI;

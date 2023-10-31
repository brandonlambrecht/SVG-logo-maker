const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  async run() {

    // Array to get text, textColor, shapeType, shapeColor data from user
    const questionArr = [
      {
        type: 'input ',
        name: 'text',
        default: 'Must not be more than 3 characters',
        message: 'Enter text for the logo',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color',
      },
      {
        type: 'list',
        name: 'shape',
        choices: ['circle', 'square', 'triangle'],
        message: 'Select a shape for the logo?',
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color',
      },
    ];
    const userResponseObj = await inquirer.prompt(questionArr);


    // Create a shape object based on inquirer data
    let myShape;
    switch (userResponseObj.shape) {
      case "circle":
        myShape = new Circle(userResponseObj.shapeColor)
        break;
      case "square":
        myShape = new Square(userResponseObj.shapeColor)

        break;
      case "triangle":
        myShape = new Triangle(userResponseObj.shapeColor)
    }

    // Create a svg object and set text and textColor using user Data
    const newSvg = new SVG(userResponseObj.text, userResponseObj.textColor, myShape)

    const svgContent = newSvg.render()
    console.log('SVG created')


    // Write svg file

    await writeFile('logo.svg', svgContent);


  }
}

module.exports = CLI;

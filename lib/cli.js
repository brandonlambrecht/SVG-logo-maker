const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  async run() {

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
    // TODO: Create a shape object based on inquirer data
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
      default:
        throw new Error("Check you switch statement something is wrong and your condition does not match any case")
    }
    // TODO: Create a svg object and set text and textColor using user Data
    const newSvg = new SVG(userResponseObj.text, userResponseObj.textColor, myShape)
    // TODO: Set svg shape with shape object created above
    const svgContent = newSvg.render()
    console.log(svgContent)
    // TODO: Write your svg file
    const promptUser = async () => {
      try {



        const logoContent = CLI(userResponseObj);

        await fs.promises.writeFile('logo.svg', logoContent);

        console.log('Generated logo.svg');

      } catch (err) {
        console.log(err);
      }
    };
  }
}

module.exports = CLI;

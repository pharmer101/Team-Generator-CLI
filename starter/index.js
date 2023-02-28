const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const allEmployees = [];


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// const testManager = new Manager("bob", "74","bob@builder.com","bobgit12e3")

// console.log(testManager.name)
// console.log(testManager.getRole())

//-----------testing inquirer answers to create a class with manager only---------------

inquirer
  .prompt([
    {
      name: 'name',
      message: 'What is the managers name?'
    },

    {
        name: 'id',
        message: 'What is the managers ID?'
    },
    {
        name: 'email',
        message: 'What is the managers email?'
    },
    {
        name: 'officeNumber',
        message: 'what is the managers office number?'
    },
    


  ])
  .then(answers => {

      //----------instructions for when you have the answers for inquirer-------------------
   
    // * When a user decides to finish building their team then they exit the application, and the HTML is generated.
    //  1 - Call the `render` function (provided for you) and pass in an array containing all employee objects; 
    //   * The `render` function will generate and return a block of HTML including templated divs for each employee! - **feed this into FS
    //  2 - Create an HTML file using the HTML returned from the `render` function. 
    //  3  Write it to a file named `team.html` in the `output` folder. 
    //   * You can use the provided variable `outputPath` to target this location.

// -------------------------------add answers to new instance of Manager. Add that instance to allemployee array-------------------
 
    const newManager = new Manager(answers.name,answers.id,answers.email,answers.officeNumber,);
   // console.log(newManager);
    allEmployees.push(newManager);
    //console.log("Manager added to allemployees array");
    //console.log(allEmployees[0]);

  
    //-----------------use the render function to create a block of HTML-----------------

   // Write the page-template file to the html file that is created in this function
// Create the output directory if the output path doesn't exist
if (!fs.existsSync("./output")) {
  fs.mkdirSync("./output")};

const renderedTHTML = render(allEmployees);
// console.log(renderedTHTML)
fs.writeFileSync(outputPath, renderedTHTML,"utf-8");
   

  });




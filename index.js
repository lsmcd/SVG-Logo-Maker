const inquirer = require("inquirer")

inquirer
    .prompt([
        {
            type: "input",
            name: "text",
            message: "Inner shape text (3 character limit):"
        },
        {
            type: "input",
            name: "textColor",
            message: "Text Color by keyword or hexadecimal:"
        },
        {
            type: "list",
            name: "shape",
            message: "Shape type:",
            choices: ["circle", "triangle", "square"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Shape Color by keyword or hexadecimal:"
        }
    ])
    .then((answers) => {
        
    })
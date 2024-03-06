const inquirer = require("inquirer")
const { Triangle, Circle, Square } = require("./lib/shapes")

inquirer
    .prompt([
        {
            type: "input",
            name: "text",
            default: "WWW",
            message: "Inner shape text (3 character limit):"
        },
        {
            type: "input",
            name: "textColor",
            default: "Blue",
            message: "Text Color by keyword or hexadecimal:"
        },
        {
            type: "list",
            name: "shape",
            message: "Shape type:",
            choices: ["Triangle", "Circle", "Square"]
        },
        {
            type: "input",
            name: "color",
            default: "Orange",
            message: "Shape Color by keyword or hexadecimal:"
        }
    ])
    .then((answers) => {
        switch (answers.shape){
            case "Triangle":
                var shape = new Triangle()
                shape.setColor(answers.color)
                ;
                break;
            case "Circle":
                new Circle(...args).render();
                break;
            case "Square":
                new Square(...args).render();
                break;
        }
    });
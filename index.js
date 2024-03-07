const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");
const Text = require("./lib/text");
const writeSvg = require("./lib/writeFile")

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
            choices: ["Triangle", "Circle", "Square"]
        },
        {
            type: "input",
            name: "color",
            message: "Shape Color by keyword or hexadecimal:"
        }
    ])
    .then((answers) => {
        switch (answers.shape){
            case "Triangle":
                var shape = new Triangle()
                break;
            case "Circle":
                var shape = new Circle();
                break;
            case "Square":
                var shape = new Square();
                break;
        }
        shape.setColor(answers.color);
        var text = new Text()
        text.setText(answers.text);
        text.setTextColor(answers.textColor);
        writeSvg(shape.render(), text.render());
    });
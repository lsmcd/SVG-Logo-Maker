class Shape {
    constructor(text, textColor, shape, shapeColor){
        this.text = this.text(text);
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    text(text){
        return `<text x="25" y="25" text-anchor=middle>${text}</text>`
    }
    renderShape(){
        return `<svg width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
${this.svg}
${this.text}
</svg>`;
    }
}
class Triangle extends Shape {
    constructor(){
        this.svg = `<polygon points="25, 10 40, 25 10, 25"/>`;
    }
}
class Circle extends Shape {
    constructor(){
        this.svg = `<circle cx="25" cy="25" r="15"/>`;
    }
}
class Square extends Shape {
    constructor(){
        this.svg = `<rect x="10" y="10" width="30" height="30"/>`;
    }
}
module.exports = Shape;
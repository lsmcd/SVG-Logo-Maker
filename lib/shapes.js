class Shape {
    constructor (){
        this.color;
    }
    setColor(color){
        this.color = color;
    }

    render(){
        if (!this.color) throw Error("No color selected please try again");
        return this.svg() + `stroke="${this.color}" fill="${this.color}"` + ` />`;
    }
}
class Triangle extends Shape {
    svg(){
        return `<polygon points="150, 22  60, 178 240, 178" `;
    }
}
class Circle extends Shape {
    constructor(){
        super.svg = `<circle stroke="${super.shapeColor}" fill="${super.shapeColor}" cx="320" cy="320" r="600"`;
    }
}
class Square extends Shape {
    constructor(){
        super.svg = `<rect stroke="${super.shapeColor}" fill="${super.shapeColor}" x="20" y="20" width="600" height="600"/>`;
    }
}
class Text {
    constructor(){
        this.text = "";
        this.textColor = "black"
    }
    setText(text){
        this.text = text;
    }
    setTextColor(textColor){
        this.textColor = textColor;
    }
    render(){
        return `<text x="150" y="125" text-anchor="middle" font-size="50" font-weight="bold" fill="${this.textColor}">${this.text}</text>`
    }
}
module.exports = {Shape, Triangle, Circle, Square, Text};
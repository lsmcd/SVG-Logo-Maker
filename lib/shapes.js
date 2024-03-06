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
    svg(){
        return `<circle cx="150" cy="100" r="78" `;
    }
}
class Square extends Shape {
    svg(){
        return `<rect x="22" y="22" width="156" height="156" `;
    }
}
module.exports = {Shape, Triangle, Circle, Square};
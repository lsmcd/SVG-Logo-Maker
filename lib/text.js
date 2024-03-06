class Text {
    constructor (){
        this.text = "";
        this.textColor = "black";
    }
    setText(text){
        this.text = text;
    }
    setTextColor(textColor){
        this.textColor = textColor;
    }
    render(){
        return `<text x="150" y="120" text-anchor="middle" font-size="60" fill="${this.textColor}">${this.text}</text>`
    }
}
module.exports = Text;
const Text = require("./text");

describe("Text", () => {
    it("Should render a text object", () => {
        const text = new Text();
        text.setText("WWW");
        expect(text.render()).toEqual(`<text x="150" y="120" text-anchor="middle" font-size="60" fill="black">WWW</text>`);
    });
    it("Should render a colored text object", () => {
        const text = new Text();
        text.setTextColor("yellow");
        expect(text.render()).toEqual(`<text x="150" y="120" text-anchor="middle" font-size="60" fill="yellow"></text>`);
    });
});
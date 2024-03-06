const {Shape, Triangle, Circle, Square} = require("./shapes");

describe("Shapes", () => {
    it("Should print an empty Shape object", () => {
        expect(new Shape()).toEqual({})
    });
    it("Should create a Triangle object", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<polygon points="150, 22  60, 178 240, 178" stroke="blue" fill="blue" />`);
    });
    it("Should fail to create Triangle object", () => {
        expect(() => new Triangle().render()).toThrow();
    });
});
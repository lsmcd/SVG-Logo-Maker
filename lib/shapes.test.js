const {Shape, Triangle, Circle, Square} = require("./shapes");

describe("Shapes", () => {
    it("Should produce an empty Shape object", () => {
        expect(new Shape()).toEqual({});
    });
    it("Should render a Triangle object", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<polygon points="150, 22  60, 178 240, 178" stroke="blue" fill="blue" />`);
    });
    it("Should fail to create a Triangle object", () => {
        expect(() => new Triangle().render()).toThrow();
    });
    it("Should render a Circle object", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="78" stroke="blue" fill="blue" />`);
    });
    it("Should fail to create a Circle object", () => {
        expect(() => new Circle().render()).toThrow();
    });
    it("Should render a Square object", () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<rect x="22" y="22" width="156" height="156" stroke="blue" fill="blue" />`);
    });
    it("Should fail to create a Square object", () => {
        expect(() => new Square().render()).toThrow();
    });
});
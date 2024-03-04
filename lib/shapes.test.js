const Shape = require("./shapes");

describe("Shapes", () => {
    it("Should print an empty Shape object", () => {
        expect(new Shape()).toBe(undefined)
    });
});
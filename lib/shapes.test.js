const Shape = require("./shapes");

describe("Shapes", () => {
    it("Should print an empty Shape object", () => {
        expect(new Shapes()).toBe(undefined)
    });
});
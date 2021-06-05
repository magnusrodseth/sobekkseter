import conditions from "../pages/api/conditions";

describe("My first test 🏁", () => {
    it("should do nothing", () => {
        expect(3).toBe(3);
        // This is a test change that should pass all new tests
        expect(5).toBe(5);
    })
})
const Employee = require("../lib/intern")

describe("Intern Tests", () => {
    it("Should return an instance of class Intern", () => {
        const testInst = new Employee();
        expect(typeof(testInst)).toBe("object");
    });

    it("Has a value for name", () => {
        const name = "Testifer";
        const testInst = new Employee(name);
        expect(testInst.name).toBe(name);
    });
    it("Has a value for ID", () => {
        const testParam = 123;
        const testInst = new Employee("Testifer", testParam);
        expect(testInst.id).toBe(testParam);
    });
    it("Has a valid email", () => {
        const testParam = "testifer@testing.com";
        const testInst = new Employee("Testifer", 123, testParam);
        expect(testInst.email).toBe(testParam);
        expect(testInst.email).toEqual(expect.stringContaining("@"));
    });
    it("Has a value for school name", () => {
        const testParam = "TestiferSchool";
        const testInst = new Employee("Testifer", 123, "testifer@testing.com", "Intern", testParam);
        expect(testInst.school).toBe(testParam);
    });
    it("getRole returns 'Intern'", () => {
        const testParam = "Intern";
        const testInst = new Employee("Testifer", 123, "testifer@testing.com", testParam);
        expect(testInst.getRole()).toBe(testParam);
    });
    it("getName returns value for name", () => {
        const testParam = "Testifer";
        const testInst = new Employee(testParam);
        expect(testInst.getName()).toBe(testParam);
    });
    it("getId returns value for ID", () => {
        const testParam = 123;
        const testInst = new Employee("Testifer", testParam);
        expect(testInst.getId()).toBe(testParam);
    });
    it("getEmail returns value for email", () => {
        const testParam = "testifer@testing.com";
        const testInst = new Employee("Testifer", 123, testParam);
        expect(testInst.getEmail()).toBe(testParam);
    });
    it("getSchool returns value for school name", () => {
        const testParam = "TestiferSchool";
        const testInst = new Employee("Testifer", 123, "testifer@testing.com", "Intern", testParam);
        expect(testInst.getSchool()).toBe(testParam);
    });
    
})
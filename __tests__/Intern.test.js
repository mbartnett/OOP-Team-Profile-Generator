const Intern = require('../lib/Intern.js')
const intern = new Intern('Bruce Bowen', '12', 'bbowen@gmail.com', 'California State');

describe("Intern", () => {
    describe("test all properties of Intern constructor", () => {
        it("test name property", () => {
            expect(intern.name).toEqual('Bruce Bowen');
        })
        it("test id property", () => {
            expect(intern.id).toEqual('12');
        })
        it("test email property", () => {
            expect(intern.email).toEqual('bbowen@gmail.com');
        })
        it("test school property", () => {
            expect(intern.school).toEqual('California State');
        })
    })
    describe("test all methods of Intern constuctor", () => {
        it("test school method", () => {
            expect(intern.getSchool()).toEqual('California State');
        })
        it("test getRole method", () => {
            expect(intern.getRole()).toEqual('Intern');
        })
    })
})
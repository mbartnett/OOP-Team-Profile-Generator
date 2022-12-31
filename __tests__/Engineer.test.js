const Engineer = require('../lib/Engineer.js')
const engineer = new Engineer('Manu Ginobili', '20', 'mginobili@gmail.com', 'mginobili');

describe("Engineer", () => {
    describe("test all properties of Engineer constructor", () => {
        it("test name property", () => {
            expect(engineer.name).toEqual('Manu Ginobili');
        })
        it("test id property", () => {
            expect(engineer.id).toEqual('20');
        })
        it("test email property", () => {
            expect(engineer.email).toEqual('mginobili@gmail.com');
        })
        it("test github property", () => {
            expect(engineer.github).toEqual('mginobili');
        })
    })
    describe("test all methods of Engineer constuctor", () => {
        it("test getGithub method", () => {
            expect(engineer.getGithub()).toEqual('mginobili');
        })
        it("test getRole method", () => {
            expect(engineer.getRole()).toEqual('Engineer');
        })
    })
})
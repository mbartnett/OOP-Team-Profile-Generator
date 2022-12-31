const Manager = require ('../lib/Manager.js')
const manager = new Manager('Tony Parker', '9', 'tparker@gmail.com', '9A');

describe("Manager", () => {
    describe("test all properties of Manager constructor", () => {
        it ("test name property", () => {
            expect(manager.name).toEqual('Tony Parker');
        })
        it("test id property", () => {
            expect(manager.id).toEqual('9');
        })
        it("test email property", () => {
            expect(manager.email).toEqual('tparker@gmail.com');
        })
        it("test officeNumber property", () => {
            expect(manager.officeNumber).toEqual('9A');
        })
    })
    describe("test all methods of Manager constuctor", () => {
        it("test getRole method", () => {
            expect(manager.getRole()).toEqual('Manager');
        })
    })
})

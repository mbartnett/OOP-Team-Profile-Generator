const Employee = require('../lib/Employee.js');
const employee = new Employee('Tim Duncan', '21', 'tduncan@gmail.com');

describe("Employee", () => {
    describe("test all properties of Employee constructor", () => {
        it("test name property", () => {
            expect(employee.name).toEqual('Tim Duncan');
        })
        it("test id property", () => {
            expect(employee.id).toEqual('21');
        })
        it("test email property", () => {
            expect(employee.email).toEqual('jdoe@gmail.com');
        })
    })
    describe("test all methods of Employee constructor", () => {
        it("test email method", () => {
            expect(employee.getEmail()).toEqual('tduncan@gmail.com');
        })
        it("test role method", () => {
            expect(employee.getRole()).toEqual('Employee');
        })
    })
})
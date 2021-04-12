const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
test('creates an employee object', () => {
    const employee = new Employee('Clayton', 1, 'clayton@fakeemail.com');

    expect(employee.getName()).toBe('Clayton');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('clayton@fakeemail.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Clayton', 1, 'clayton@fakeemail.com');
    
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));

});

test("gets employee's email", () => {
    const employee = new Employee('Clayton', 1, 'clayton@fakeemail.com');

    expect(employee.getEmail()).toBe('clayton@fakeemail.com');
    expect(employee.getEmail()).toBe(employee.email);
})

test("gets employee's id", () => {
    const employee = new Employee('Clayton', 1, 'clayton@fakeemail.com');

    expect(employee.getId()).toEqual("1");
})
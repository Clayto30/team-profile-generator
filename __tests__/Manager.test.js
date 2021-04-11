const { test, expect } = require('@jest/globals');
// const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager')

test('creates a Manager object', () => {
    const manager = new Manager('Clayton', 1, 'clayton@fakemail.com', 149);
    expect(manager.name).toBe('Clayton');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('clayton@fakemail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's office number", () => {
    const manager = new Manager('Clayton', 1, 'clayton@fakemail.com', 149);
    expect(manager.getOfficeNumber()).toBe(149);
});

test("gets manager role", () => {
    const manager = new Manager('Clayton', 1, 'clayton@fakemail.com', 149);
    expect(manager.getRole()).toBe('Manager');
});
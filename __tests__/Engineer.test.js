const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Clayton', 1, 'clayton@fakemail.com', 'clayto30');
    expect(engineer.name).toBe('Clayton');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('clayton@fakemail.com');
    expect(engineer.github).toBe('clayto30');
});

test('gets engineer github', () => {
    const engineer = new Engineer('Clayton', 1, 'clayton@fakemail.com', 'clayto30');
    expect(engineer.getGithub()).toBe('clayto30');
})


test("gets engineer's role", () => {
    const engineer = new Engineer('Clayton', 1, 'clayton@fakemail.com', 'clayto30');

    expect(engineer.getRole()).toBe("Engineer");
})
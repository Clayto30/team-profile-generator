const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('clayton')
    expect(engineer.name).toBe('clayton');
});

test('gets engineer github', () => {
    const engineer = new Engineer();
})
const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Clayton', 1, 'clayton@fakemail.com', 'UCSC');        
    expect(intern.name).toBe('Clayton');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('clayton@fakemail.com');
    expect(intern.school).toBe('UCSC');
});

test("gets intern's role", () => {
    const intern = new Intern('Clayton', 1, 'clayton@fakemail.com', 'UCSC');

    expect(intern.getRole()).toBe("Intern");
})

test("gets intern's school", ()=> {
    const intern = new Intern('Clayton', 1, 'clayton@fakemail.com', 'UCSC');

    expect(intern.getSchool()).toBe("UCSC");
})

    
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        this.github = github;
    }

    getGithub() {
        return `${this.github}`
    }

    getRole() {
        return `Engineer`;
    }
}

module.exports = Engineer;
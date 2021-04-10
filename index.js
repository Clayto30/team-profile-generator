const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// create an empty array of team members and push this manager (with their team members in it too)
const createManager = () => {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "Please enter the team manager's name.",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    } return `Please enter a character as a string.`
                }
            },
            {
                type: 'input',
                // is a number above zero 
                name: 'managerId',
                message: "What is the team manager's employee ID?"
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "Please enter the manager's email."
                // validate is a valid email address by checking if string
            }
            // another prompt office number
        ])
        .then(answers => {
            const manager = new Manager(answers.managerName);
        });
};

// promptUser();
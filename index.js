const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// create an empty array of team members and push this manager (with their team members in it too)

const createEmployees = () => {
    inquirer
        .prompt([
            
        ])
}
const createManager = () => {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the manager's name.",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    } return `Please enter a character as a string.`
                }
            },
            {
                type: 'input',
                // is a number above zero 
                name: 'id',
                message: "What is this manager's ID number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the manager's email."
                // validate is a valid email address by checking if string
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?"
            }
            // another prompt office number
        ])
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            createEmployees();
        });

};

createManager();
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// create an empty array of team members and push this manager (with their team members in it too)
const employeesArray = [];
let recursionIncrement = 0;
const createEmployees = () => {
    // when this is done and I'm sure I don't have an infinite loop, remove recursion incredment and return
    recursionIncrement++
    if (recursionIncrement > 20) {
        return
    }
    inquirer
        .prompt([
            
            // { type: 'list',
            //     name:
            //     message "what "
            //     choices : "engineer", intern, finish building my team}
            // do a prompt for jus the above question.
            // .then(res) {
                // if (next) = "finish building my team" call a function
                // else if (next = "engineer")  ask em more questions
            //}
            // 
                {
            
                type: 'input',
                name: 'name',
                message: "Please enter the employee's name.",
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
                message: "What is this employee's ID number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the employee's email."
                // validate is a valid email address by checking if string
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's github profile?",
                when: answers => {
                    answers.employeeType === "Engineer"
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school?",
                when: answers => {
                    answers.employeeType === "Intern"
                }
            }])
};

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
            // push manager to employeeArray here?
            // do this same thing 
            createEmployees();
        });

};

createManager();

const buildTeam = () => {
    for (let i = 0; i < employeesArray.length; i++) {
        // let employee = employeesArray[i]
    }
}
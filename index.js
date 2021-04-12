const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employeesArray = [];
// creates an employee type that is an intern
const createIntern = () => {
    inquirer
        .prompt([
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
                name: 'school',
                message: "What is the intern's school?",
            }])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            promptNewEmployee();
        })
}
// creates an employee object that is an engineer
const createEngineer = () => {
    inquirer
        .prompt([
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
            }])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            promptNewEmployee();
        });
}

// questions user in CLI if they want to make another employee object
const promptNewEmployee = () => {
    inquirer
        .prompt(

            {
                type: 'list',
                name: 'employeeType',
                message: "Would you like to add an employee?",
                choices: ["engineer", "intern", "finish building my team"]
            }
        )
        .then(answers => {
            if (answers.employeeType == "engineer") {
                createEngineer();
            } else if (answers.employeeType == "intern") {
                createIntern();
            } else {
                console.log("no more questions");
                return;
            };
        })
};

// first employee created is the manager, with questions
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
            promptNewEmployee();
        });

};
// initial call 
createManager();

const buildTeam = () => {
    for (let i = 0; i < employeesArray.length; i++) {
        // let employee = employeesArray[i]
    }
}
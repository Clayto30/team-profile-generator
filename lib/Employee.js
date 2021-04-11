class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id;
        this.email = email;
    }
    getName() {
        return `${this.name}`
    }

    getId() {
        return `${this.id}`
    }

    getEmail() {
        return `${this.email}`
    }

    // getRole() {
    //     if (employeeType = "intern") {
    //         return `Intern`;
    //     } else if (employeeType = "manager") {
    //         return 'Manager';
    //     } else if (employeeType = "engineer") {
    //         return `Engineer`;
    //     }
    // }
}

module.exports = Employee;
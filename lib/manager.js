const Employee = require("./employee");

// Class constructor for Manager - Extends as child class from Employee
class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email);
        this.role = role;
        this.officeNumber = officeNumber;
    }
    
    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;
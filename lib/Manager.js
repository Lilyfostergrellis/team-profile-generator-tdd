// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");
//manager class inherits from Employee

class Manager extends Employee {

    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;

    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    //method for office number
    
    getRole(){
        return this.officeNumber;
    }
    //method for role

}

module.exports = Manager;
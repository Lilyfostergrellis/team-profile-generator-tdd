// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Intern = require("./Employee");
//Intern class is iherited from Employee

class Intern extends Employee {

    constructor(name, id, email){
        super(name, id, email);
        //taken from the parent
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';
    }

}

module.exports = Intern;

/* TEST PURPOSES
let intern = new Intern("Mary", 321, "mmm@test.com", "UCL");
console.log(intern); */
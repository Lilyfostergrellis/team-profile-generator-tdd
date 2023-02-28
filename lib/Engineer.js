// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
//engineer class inherits from Employee

class Engineer extends Employee{

    constructor(name, id, email){
        super(name, id, email);
        //inherited from parent
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }

}

module.exports = Engineer;
//export Engineer

/* TEST PURPOSES
let engineer = new Engineer("Lily", 1234, "test@test.com", "testtest");

console.log(engineer); */
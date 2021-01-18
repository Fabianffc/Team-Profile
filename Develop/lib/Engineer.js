// TODO: Write code to define and export the Engineer class. 
// HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.officeNumber = officeNumber;
        //super() is called to avoid duplicating the constructor parts' that are common between Employee and Engineer
        super(name, id, email);
        this.github = github;
    }
    //methods 
    getGithub(){
        return this.github
    }
    getRole() {
        return "Engineer"
    };
};
//exporting the class Engineer
module.exports = Engineer;

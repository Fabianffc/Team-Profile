// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        //super() is called to avoid duplicating the constructor parts' that are common between Employee and Intern
        super(name, id, email);
        this.school = school;
    }
    //methods 
    getSchool(){
        return this.school
    }
    getRole() {
        return "Intern"
    };
};
//exporting the class Intern
module.exports = Intern;
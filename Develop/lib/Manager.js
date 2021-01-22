// TODO: Write code to define and export the Manager class. 
//HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

//Defining the "Manager" class using the "Employee" class to not repeat code with "extends"
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //super() is called to avoid duplicating the constructor parts' that are common between Employee and Manager
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    //methods
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole() {
        return "Manager"
    };
};

//exporting the class Manager
module.exports = Manager;

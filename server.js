require("dotenv").config();

const consoleTable = ("console.table")
const mysql2 = require("mysql2");
const inquirer = require("inquirer");

// port for .env

const PORT = process.env.PORT || 3001;

// Connect to database
const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
});

//connection.connect(function (err) {
    if (err) throw err;
    employeeTracker();
});

// Create an async function that will call the rest of the functions based off of the user's choice.
//async and wait 
async function employeeTracker() {}


  // inquirer questions

  //user first prompt menu

  function userChoice() {
    return inquirer.prompt([{
        name: "firstQuestion",
        message: "What would you like to do?",
        type: "list",
        choices: ["Add Department", "Add Role", "Add Employee", "View Departments", "View Roles", "View Employees", "Update Employee Role", "Exit"]
    }]).then(response => response.firstQuestion)
};

// add a new department function 

function DepartmentName() {
    return inquirer.prompt([{
        name: "newDepartmentName",
        message: "What would you like to name the new department?",
        type: "input"
    }]).then(function (response) {
        return response.newDepartmentName;
    });
};


//create new department name

function addNewDepartment(askDeptName) {
    console.log(askDeptName);
    connection.query("INSERT INTO department (name) VALUE ('" + askDeptName + "')", function (err, result) {
        if (err) throw err;
        console.log("New department created!");
        employeeTracker();        
    });
};


//add a new role 


const newRole = [
    {
        name: "newRoleTitle",
        message: "What would you like to name the new role?",
        type: "input"
    },
    {
        name: "newRoleSalary",
        message: "What is the salary for the new role? Please enter only numbers.",
        type: "number"
    },
    {
        name: "newDeptId",
        message: "What is the ID of the department for this new role? Please enter only numbers.",
        type: "number"
    }
]

// create a new role function

function addNewRole(newRoleInfo) {
    connection.query("INSERT INTO roles (title, salary, department_id) VALUE ('" + newRoleInfo.newRoleTitle + "', '" + newRoleInfo.newRoleSalary + "', '" + newRoleInfo.newDeptId + "')", function (err, result) {
        if (err) throw err;
        console.log("New role created!");
        employeeTracker();
    });
};

//add new employee

const newEmployee = [
{
    name: "newEmpFirstName",
    message: "What is the employee's first name?",
    type: "input"
},
{
    name: "newEmpLastName",
    message: "What is the employee's last name?",
    type: "input"
},
{
    name: "empRoleId",
    message: "What is the employee's role ID? Please enter only numbers.",
    type: "number"
},
{
    name: "managerId",
    message: "What is the employee's manager's ID? Please enter only numbers.",
    type: "number"
}
]


// create a new employee function

function addNewEmployee(newEmpInfo) {
    connection.query("INSERT INTO employees (firstName, lastName, role_id, manager_id) VALUE ('" + newEmpInfo.newEmpFirstName + "', '" + newEmpInfo.newEmpLastName + "', '" + newEmpInfo.empRoleId + "', '" + newEmpInfo.managerId + "')", function (err, result) {
        if (err) throw err;
        console.log("New employee created!");
        employeeTracker();
    });
};
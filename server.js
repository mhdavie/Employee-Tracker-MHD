require("dotenv").config();

const consoleTable = ("console.table")
const mysql = require("mysql2");
const inquirer = require("inquirer");

// port for .env

const PORT = process.env.PORT || 3306;

// Connect to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'company_db'
  });


//connection 
connection.connect(function (err) {
    if (err) throw err;
    employeeTracker();
});

// Create an async function that will call the rest of the functions based off of the user's choice.
//async and wait 
function employeeTracker() {}


//What the user will first see once logged into node
function employeeTracker()  {
    inquirer
      .prompt({
        type: "list",
        choices: [
          "Add department",
          "Add role",
          "Add employee",
          "View departments",
          "View roles",
          "View employees",
          "Update employee role",
          "Quit"
        ],
        message: "What would you like to do?",
        name: "option"
      })
      .then(function(result) {
        console.log("You entered: " + result.option);
  
        switch (result.option) {
          case "Add department":
            addNewDepartment();
            break;
          case "Add role":
            addNewRole();
            break;
          case "Add employee":
            addNewEmployee();
            break;
          case "View departments":
            displayDepts();
            break;
          case "View roles":
            displayRoles();
            break;
          case "View employees":
            displayEmployees();
            break;
          case "Update employee role":
            updateEmployee();
            break;
          default:
            quit();
        }
      });
}


// add a new department function 


function addNewDepartment() {
        inquirer.prompt({
          
            type: "input",
            message: "What is the name of the department?",
            name: "deptName"
    
        }).then(function(answer){  
    
            connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName] , function(err, res) {
                if (err) throw err;
                console.table(res);
                employeeTracker();
                
        })
        })
}
    
//add a new role

function addNewRole () {
    
    inquirer.prompt([
      {
        type: "input",
        message: "What's the name of the role?",
        name: "roleName"
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "salaryTotal"
      },
      {
        type: "input",
        message: "What is the department id number?",
        name: "deptID"
      }
    ])
    .then(function(answer) {
      connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.deptID], function(err, res) {
        if (err) throw err;
        console.table(res);
        employeeTracker();
      });
    });

}

// create a new employee function

function addNewEmployee(){
    inquirer.prompt([
            {
              type: "input",
              message: "What's the first name of the employee?",
              name: "eeFirstName"
            },
            {
              type: "input",
              message: "What's the last name of the employee?",
              name: "eeLastName"
            },
            {
              type: "input",
              message: "What is the employee's role id number?",
              name: "roleID"
            },
            {
              type: "input",
              message: "What is the manager id number?",
              name: "managerID"
            }
          ])
          .then(function(answer) {            
            connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.eeFirstName, answer.eeLastName, answer.roleID, answer.managerID], function(err, res) {
              if (err) throw err;
              console.table(res);
              employeeTracker();
            });
        });
    }


function updateEmployee() {
    inquirer.prompt([
        {
          type: "input",
          message: "Which employee would you like to update?",
          name: "eeUpdate"
        },
  
        {
          type: "input",
          message: "What do you want to update to?",
          name: "updateRole"
        }
      ])
      .then(function(answer) {
        connection.query('UPDATE employee SET role_id=? WHERE first_name= ?',[answer.updateRole, answer.eeUpdate],function(err, res) {
          if (err) throw err;
          console.table(res);
          employeeTracker();
        });
      });
}

function displayDepts() {
    // select from the db
    let query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      employeeTracker();
    });
   
}

function displayRoles () {    // select from the db
    let query = "SELECT * FROM role";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      employeeTracker();
    });
    
}

  function displayEmployees() {
    // select from the db
    let query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      employeeTracker();
    });
    // show the result to the user (console.table)
}

function quit() {
    connection.end();
    process.exit();
}
  

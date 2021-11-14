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
})

  // inquirer questions

  

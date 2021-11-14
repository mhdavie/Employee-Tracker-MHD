DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;


DROP TABLE IF EXISTS department;
CREATE TABLE department (
  id INT NOT NULL,
  department_name VARCHAR(30) NOT NULL,
);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role_title VARCHAR(30) NOT NULL,
  role_salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES (department_id)
  
);

DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    


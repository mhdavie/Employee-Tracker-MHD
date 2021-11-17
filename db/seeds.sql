use company_db;

INSERT INTO department
    (name)
VALUES
    ('Griffindor'),
    ('Hufflepuff'),
    ('Ravenclaw'),
    ('Slytherin');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Caretaker', 500000, 1),
    ('Professor', 90000, 1),
    ('Student', 190000, 2),
    ('Software Engineer', 170000, 2),
    ('Auror', 170000, 3),
    ('Quidditch Captain', 300000, 3),
    ('Dementador', 290000, 4),
    ('Magic Minister', 490000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Harry', 'Potter', 1, NULL),
    ('Ron', 'Weasley', 2, 1),
    ('Hermione', 'Granger', 3, NULL),
    ('Rubeous', 'Hagrid', 4, 3),
    ('Draco', 'Malfoy', 5, NULL),
    ('Gina', 'Weasley', 6, 5),
    ('Cedrico', 'Gregory', 7, NULL),
    ('Luna', 'Lovegood', 8, 7);





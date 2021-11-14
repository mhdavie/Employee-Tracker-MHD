INSERT INTO department (department_name)
VALUES (Department of Magical Law Enforcement),
       (Department of Magical Games Sports),
       (Department of International Magical Cooperation),
       (Department of Magical Accidents Catastrophes);

INSERT INTO roles (role_title, role_salary, department_id)
VALUES (Manager, 5000.00, 1),
       (Auror, 4000.00, 2),
       (Quidditch Captain, 2000.00, 3),
       (Hogwarts caretaker, 1500.00, 4),
       (Professor of Defence Against the Dark Arts, 6000.00, 5),
       (Professor of Herbology, 6000.00, 6);

INSERT INTO employees (first_Name, last_Name, role_id, manager_id)
VALUES ('Harry', 'Potter', 1, 2),       
       ('Ron', ' Weasley', 3, 4),
       ('Hermione', 'Granger', 5, 6),
       ('Rubeus', 'Hagrid', 6, 7),
       ('Draco' 'Malfoy', 8, 9),
       ('Gina', 'Weasley', 10, 11)
       ('Cedrico', 'Gregory', 12, 13)








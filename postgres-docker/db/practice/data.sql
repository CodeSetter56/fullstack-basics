-- Insert data into Departments
INSERT INTO DEPT (DEPT_ID, DEPT_NAME) VALUES
(1, 'Sales'),
(2, 'IT'),
(3, 'Human Resources');

-- Insert data into Employees
INSERT INTO EMP (EMP_ID, FIRST_NAME, LAST_NAME, SALARY, HIRE_DATE, DEPT_ID) VALUES
(101, 'John', 'Doe', 70000.00, '2022-05-15', 1),
(102, 'Jane', 'Smith', 85000.00, '2021-08-20', 2),
(103, 'Peter', 'Jones', 95000.00, '2021-03-10', 2),
(104, 'Mary', 'Williams', 65000.00, '2023-01-25', 1),
(105, 'Chris', 'Brown', 60000.00, '2023-06-01', 3);

-- Insert data into Projects
INSERT INTO PROJ (PROJ_ID, PROJ_NAME) VALUES
(501, 'Website Redesign'),
(502, 'API Development'),
(503, 'HR Onboarding System');

-- Assign employees to projects
INSERT INTO EMPPROJ (EMP_ID, PROJ_ID) VALUES
(101, 501),
(102, 501),
(102, 502),
(103, 502),
(105, 503);
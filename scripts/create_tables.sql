CREATE TABLE IF NOT EXISTS Students (
    ID INT PRIMARY KEY,
    Name VARCHAR(255),
    Age INT,
    Grade VARCHAR(10),
    ClassID INT,
    FOREIGN KEY (ClassID) REFERENCES Classes(ID)
);

CREATE TABLE IF NOT EXISTS Teachers (
    ID INT PRIMARY KEY,
    Name VARCHAR(255),
    Subject VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Classes (
    ID INT PRIMARY KEY,
    Subject VARCHAR(255),
    TeacherID INT,
    NumberOfStudents INT,
    FOREIGN KEY (TeacherID) REFERENCES Teachers(ID)
);

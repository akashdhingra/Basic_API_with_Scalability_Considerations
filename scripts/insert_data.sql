-- Insert data into Students table
INSERT INTO Students (ID, Name, Age, Grade, ClassID)
VALUES
  (1, 'John Doe', 18, 'A', 1),
  (2, 'Jane Smith', 17, 'B', 2);

-- Insert data into Teachers table
INSERT INTO Teachers (ID, Name, Subject)
VALUES
  (1, 'Mr. Johnson', 'Math'),
  (2, 'Ms. Davis', 'English');

-- Insert data into Classes table
INSERT INTO Classes (ID, Subject, TeacherID, NumberOfStudents)
VALUES
  (1, 'Math Class', 1, 20),
  (2, 'English Class', 2, 15);

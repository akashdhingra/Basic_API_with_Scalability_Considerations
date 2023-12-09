// Assuming you have Express and a database connection library (e.g., mysql2) installed
const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 3000;

// Set up a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root@12345',
  database: 'school_system',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to add a new student (POST /students)
app.post('/students', async (req, res) => {
  const {id, name, age, grade, classID } = req.body;

  try {
    const [result] = await pool.execute('INSERT INTO Students (ID, Name, Age, Grade, ClassID) VALUES (?, ?, ?, ?, ?)', [id, name, age, grade, classID]);
    res.status(201).json({ message: 'Student added successfully' });
  } catch (error) {
    console.error('Error adding student:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to retrieve student details (GET /students/{id})
app.get('/students/:id', async (req, res) => {
  const studentId = req.params.id;

  try {
    const [result] = await pool.execute('SELECT * FROM Students WHERE ID = ?', [studentId]);
    if (result.length === 0) {
      res.status(404).json({ error: 'Student not found' });
    } else {
      res.json(result[0]);
    }
  } catch (error) {
    console.error('Error retrieving student details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint for cursor-based pagination to list students (GET /students)
app.get('/students', async (req, res) => {
  const cursor = req.query.cursor || 0; // Default cursor to 0 if not provided

  try {
    const [results] = await pool.execute('SELECT * FROM Students WHERE ID > ? LIMIT 10', [cursor]);
    res.json(results);
  } catch (error) {
    console.error('Error retrieving students:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to update student information (PUT /students/{id})
app.put('/students/:id', async (req, res) => {
  const studentId = req.params.id;
  const { name, age, grade, classID } = req.body;

  try {
    await pool.execute('UPDATE Students SET Name = ?, Age = ?, Grade = ?, ClassID = ? WHERE ID = ?', [name, age, grade, classID, studentId]);
    res.json({ message: 'Student updated successfully' });
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to remove a student (DELETE /students/{id})
app.delete('/students/:id', async (req, res) => {
  const studentId = req.params.id;

  try {
    await pool.execute('DELETE FROM Students WHERE ID = ?', [studentId]);
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

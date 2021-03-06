// Dependencies
const mysql = require('mysql');

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  // Enter your PORT number
  port: 3306,
  // Enter your username
  user: 'root',
  // Enter your password
  password: 'pw',
  database: 'burgers_db',
});

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as id ${connection.threadId}`);
});

// Exports
module.exports = connection;
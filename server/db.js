const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  database: 'forumDB'
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to DB');
    return;
  }
  console.log('Connected to DB with id', connection.threadId);
});

exports.connection = connection;



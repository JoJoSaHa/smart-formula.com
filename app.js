const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const indexRoutes = require('./routes/index');
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/views/css'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mapel'
});

connection.connect(function(error) {
  if (error) {
    console.error('Error connecting to database: ' + error.stack);
    return;
  }
  console.log('Connected to database with ID ' + connection.threadId);
});

app.use('/', indexRoutes);

app.listen(port, function() {
  console.log(`Server is listening on port ${port}`);
});

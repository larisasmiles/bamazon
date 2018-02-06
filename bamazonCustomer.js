const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    database:"bamazon"
})

connection.connect(function(err) {
  console.log("connected as id: "+connection.threadId);
})
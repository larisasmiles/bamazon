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
// Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

// 6. The app should then prompt users with two messages.

// * The first should ask them the ID of the product they would like to buy.
// * The second message should ask how many units of the product they would like to buy.
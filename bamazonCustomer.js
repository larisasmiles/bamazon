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


// // global variables
// let currectStock = 0;
// let price = 0;

// function displayItems() {
//   console.log("Items In Stock")

//   connection.query(
//     'SELECT * FROM `products` WHERE stock_quanitity > 0',
//     function (err, results, fields) {
//       var table = new Table({

//       })
//     }
//   )
// }
 
const start = function() {
  inquirer.prompt([{
    name: "productSelection",
    type: "input",
    message: "What is the [ID] number of the [product] you'd like to buy?",
  },
  {
    name: "quanity",
    type: "input",
    message: "How many would you like?"
  }].then(function(answer){
    if(answer.productSelection()=="")
  })
)
  
};

console.log(start);


// need inquirer done
// need mysql done

// connect to mysql database done

// create menu, via inquirer
// products for sale (functions)
// low inventory (functions)
// add to inventory (functions)
// add new product (functions)
// switch statement, call the above functions


// function currentProducts()
// query database, select every item inside db
// list ids, names, prices, and quantities

// function lowInventory()
// list all items with inventory count < 5

// function addInventory()
// prompt (inquirer) manager to add more
// items to current product
// select current item, update sql db

// function newProduct()
// add new product to db
// inquirer to prompt item name, cost, department, etc match to your db
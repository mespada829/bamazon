// Dependencies
var mysql = require('mysql');
var inquirer = require ('inquirer');

//  SQL Connection
var connection = mysql.createConnection({
 host: "localhost",
 port:"8889",
 user: "root",
 password:"root"
})

connection.connect(function(err){
  if (err) throw err;
  console.log("Connected to Bamazon");
})

// Function + Inquirer
function productlist() {
    var query = "SELECT itemid, productname, departmentname, price FROM products";
    connection.query(query, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("Welcome to Bamazon!")
           console.log("==========+++=========+++==========++++")
            console.log("Id#:" + res[i].itemid)
            console.log("Product Name: " + res[i].productname)
            console.log("Department Name: " + res[i].departmentname)
            console.log("Price: $" + res[i].price)
            console.log(" ")
            console.log("+++===================+++================+++")

        }
        product() // Getting syntax error - will troubleshoot again 
    });

}

function product() {
    inquirer
        .prompt([
            {
                name: "product",
                type: "input",
                message: "Please enter the Id# of the product you would like to purchase"
            },

            {
                name: "quantity",
                type: "input",
                message: "Please enter how many would you like to purchase?"

            }
        ]);

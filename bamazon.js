// Dependencies
var mysql = require('mysql');
var inquirer = require ('inquirer');

//  SQL Connection
var connection = mysql.createConnection({
 host: "localhost",
 port:"8889",
 user: "root",
 password:"root",
 database: "bamazon"
})

connection.connect(function(err){
  if (err) throw err;
  console.log("Connected to Bamazon");
})

// Function: Display product list
var productList = function (){
    connection.query("SELECT * FROM products", function(err, res) {
        for (var i = 0; i < res.length; i++){
           console.log("Welcome to Bamazon!");
            console.log("==========+++=========+++==========");
            console.log("ID#:" + res[i].itemid);
            console.log("Product Name: " + res[i].productname);
            console.log("Department Name: " + res[i].departmentname);
            console.log("Price: $" + res[i].price);
            console.log("+++===================+++================+++");
    }

})

}
// It won't display product list

function promptCustomer() {
inquirer.prompt
  name: "product",
  type: "input",
  message:"What item would you like to purchase?"

}

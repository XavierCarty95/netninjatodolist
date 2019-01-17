var express = require("express");
var todoController = require("./controllers/todoControllers");

var app = express();

//set up template engine
app.set("view engine", "ejs");

//static files
////Didn't work as NN listed
// app.use(express.static("./public"));
app.use('/public', express.static('public'));



//fire controllers
todoController(app);

//listen to port
app.listen(8080);

console.log("You are listening to port 8080");


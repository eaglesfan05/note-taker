// Dependencies
var express = require("express");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//requires in html routes file
require("./htmlroutes/htmlroutes.js")(app);

// Starts the server to begin listening
// 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
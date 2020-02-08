// Dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//requires in html routes file
require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);
// Starts the server to begin listening
// 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });